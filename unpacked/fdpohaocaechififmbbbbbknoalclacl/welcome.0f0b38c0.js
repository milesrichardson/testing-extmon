(() => {
  function f(f) {
    return f && f.__esModule ? f.default : f;
  }
  function e(f, e, a, i) {
    Object.defineProperty(f, e, { get: a, set: i, enumerable: !0, configurable: !0 });
  }
  var a =
      "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : {},
    i = {},
    o = {},
    n = a.parcelRequire60cc;
  null == n &&
    (((n = function (f) {
      if (f in i) return i[f].exports;
      if (f in o) {
        var e = o[f];
        delete o[f];
        var a = { id: f, exports: {} };
        return (i[f] = a), e.call(a.exports, a, a.exports), a.exports;
      }
      var n = new Error("Cannot find module '" + f + "'");
      throw ((n.code = "MODULE_NOT_FOUND"), n);
    }).register = function (f, e) {
      o[f] = e;
    }),
    (a.parcelRequire60cc = n)),
    n.register("fDLJ6", function (a, i) {
      e(a.exports, "getMaxVersion", () => d), e(a.exports, "getEmojiMaxSize", () => s), e(a.exports, "default", () => b);
      var o = n("ff4Ef"),
        t = n("fueUa"),
        r = n("dirPL");
      let _ = null;
      const s = () => {
        if (null === _) {
          const t = g(f(r).tests[f(r).tests.length - 1][1]);
          let s = 200;
          const l = [256, 400, 600];
          var e = !0,
            a = !1,
            i = void 0;
          try {
            for (var o, n = l[Symbol.iterator](); !(e = (o = n.next()).done); e = !0) {
              let f = o.value;
              if (!u(t, f)) break;
              s = f;
            }
          } catch (f) {
            (a = !0), (i = f);
          } finally {
            try {
              e || null == n.return || n.return();
            } finally {
              if (a) throw i;
            }
          }
          _ = s === l[l.length - 1] ? -1 : s;
        }
        return _;
      };
      let l = null;
      const d = () => {
          if (null === l) {
            l = 0;
            var e = !0,
              a = !1,
              i = void 0;
            try {
              for (var n, t = f(r).tests[Symbol.iterator](); !(e = (n = t.next()).done); e = !0) {
                const f = (0, o.default)(n.value, 2),
                  e = f[0],
                  a = f[1];
                if (u(g(a))) {
                  l = e;
                  break;
                }
              }
            } catch (f) {
              (a = !0), (i = f);
            } finally {
              try {
                e || null == t.return || t.return();
              } finally {
                if (a) throw i;
              }
            }
          }
          return l;
        },
        c = () => {
          let e = [];
          return (
            f(r).extraTests.forEach((f) => {
              let a = f.test,
                i = f.codes;
              u(g(a)) || (e = e.concat(i));
            }),
            new Set(e)
          );
        },
        g = (f) => {
          const e = f.split("_").map((f) => parseInt(f, 16));
          return String.fromCodePoint.apply(String, e);
        },
        u = (f, e, a) => {
          let i = void 0 === f ? "🐨" : f,
            o = void 0 === e ? null : e,
            n = void 0 !== a && a;
          const r = document.createElement("canvas"),
            _ = r.getContext("2d");
          (_.textBaseline = "middle"),
            (_.textAlign = "center"),
            null !== o && (_.font = `${o}px ${t.FONT_FAMILY_EMOJIS}`),
            _.fillText(i, 0, 0);
          const s = 0 !== _.getImageData(0, 0, 1, 1).data[3];
          if (n) {
            const f = "__emojitests";
            let e = document.getElementById(f);
            e ||
              ((e = document.createElement("div")),
              (e.id = f),
              Object.assign(e.style, {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                padding: "1em",
                background: "#fff",
                border: "5px solid red",
                boxSizing: "border-box",
                zIndex: 9999
              }),
              document.body.appendChild(e)),
              (_.font = `18px ${t.FONT_FAMILY_EMOJIS}`),
              (_.textAlign = "right"),
              (_.textBaseline = "bottom");
            const a = _.getImageData(0, 0, 1, 1).data;
            _.fillText(`${s}[${a[0]},${a[1]},${a[2]},${a[3]}] - ${i}`, 290, 140),
              (r.style.backgroundColor = s ? "#7F7" : "#F77"),
              e.appendChild(r);
          }
          return s;
        };
      var b = (() => {
        const e = [],
          a = d(),
          i = c();
        return (
          a > 0 &&
            f(r).groups.forEach((f) => {
              let n = f.group,
                t = f.subgroups;
              const r = [];
              t.forEach((f) => {
                let e = f.subgroup;
                f.emojis.forEach((f) => {
                  let n = (0, o.default)(f, 3),
                    t = n[0],
                    _ = n[1];
                  "2603" === t && (t = `${t}_fe0f`), n[2] <= a && !i.has(t) && r.push({ code: t, name: _, text: g(t), subgroup: e });
                });
              }),
                r.length && e.push({ group: n, emojis: r });
            }),
          e
        );
      })();
    }),
    n.register("dirPL", function (f, e) {
      f.exports = JSON.parse(
        '{"versions":[12,11,10,9,8,7,6.1,6,5.2,5.1,4.1,4,3.2,3,1.1],"tests":[[12,"1f90d"],[11,"1f970"],[10,"1f929"],[9,"1f923"],[8,"1f643"],[7,"1f642"],[6,"1f428"],[6.1,"1f617"],[5.2,"26f0"],[5.1,"2b50"],[4.1,"26ab"],[4,"2615"],[3.2,"2764"],[3,"0023_fe0f_20e3"],[1.1,"231a"]],"groups":[{"group":"Smileys & Emotion","subgroups":[{"subgroup":"face-smiling","emojis":[["1f600","grinning face",6.1],["1f603","grinning face with big eyes",6],["1f604","grinning face with smiling eyes",6],["1f601","beaming face with smiling eyes",6],["1f606","grinning squinting face",6],["1f605","grinning face with sweat",6],["1f923","rolling on the floor laughing",9],["1f602","face with tears of joy",6],["1f642","slightly smiling face",7],["1f643","upside-down face",8],["1f609","winking face",6],["1f60a","smiling face with smiling eyes",6],["1f607","smiling face with halo",6]]},{"subgroup":"face-affection","emojis":[["1f970","smiling face with hearts",11],["1f60d","smiling face with heart-eyes",6],["1f929","star-struck",10],["1f618","face blowing a kiss",6],["1f617","kissing face",6.1],["263a_fe0f","smiling face",3.2],["1f61a","kissing face with closed eyes",6],["1f619","kissing face with smiling eyes",6.1]]},{"subgroup":"face-tongue","emojis":[["1f60b","face savoring food",6],["1f61b","face with tongue",6.1],["1f61c","winking face with tongue",6],["1f92a","zany face",10],["1f61d","squinting face with tongue",6],["1f911","money-mouth face",8]]},{"subgroup":"face-hand","emojis":[["1f917","hugging face",8],["1f92d","face with hand over mouth",10],["1f92b","shushing face",10],["1f914","thinking face",8]]},{"subgroup":"face-neutral-skeptical","emojis":[["1f910","zipper-mouth face",8],["1f928","face with raised eyebrow",10],["1f610","neutral face",6],["1f611","expressionless face",6.1],["1f636","face without mouth",6],["1f60f","smirking face",6],["1f612","unamused face",6],["1f644","face with rolling eyes",8],["1f62c","grimacing face",6.1],["1f925","lying face",9]]},{"subgroup":"face-sleepy","emojis":[["1f60c","relieved face",6],["1f614","pensive face",6],["1f62a","sleepy face",6],["1f924","drooling face",9],["1f634","sleeping face",6.1]]},{"subgroup":"face-unwell","emojis":[["1f637","face with medical mask",6],["1f912","face with thermometer",8],["1f915","face with head-bandage",8],["1f922","nauseated face",9],["1f92e","face vomiting",10],["1f927","sneezing face",9],["1f975","hot face",11],["1f976","cold face",11],["1f974","woozy face",11],["1f635","dizzy face",6],["1f92f","exploding head",10]]},{"subgroup":"face-hat","emojis":[["1f920","cowboy hat face",9],["1f973","partying face",11]]},{"subgroup":"face-glasses","emojis":[["1f60e","smiling face with sunglasses",6],["1f913","nerd face",8],["1f9d0","face with monocle",10]]},{"subgroup":"face-concerned","emojis":[["1f615","confused face",6.1],["1f61f","worried face",6.1],["1f641","slightly frowning face",7],["2639_fe0f","frowning face",3.2],["1f62e","face with open mouth",6.1],["1f62f","hushed face",6.1],["1f632","astonished face",6],["1f633","flushed face",6],["1f97a","pleading face",11],["1f626","frowning face with open mouth",6.1],["1f627","anguished face",6.1],["1f628","fearful face",6],["1f630","anxious face with sweat",6],["1f625","sad but relieved face",6],["1f622","crying face",6],["1f62d","loudly crying face",6],["1f631","face screaming in fear",6],["1f616","confounded face",6],["1f623","persevering face",6],["1f61e","disappointed face",6],["1f613","downcast face with sweat",6],["1f629","weary face",6],["1f62b","tired face",6],["1f971","yawning face",12]]},{"subgroup":"face-negative","emojis":[["1f624","face with steam from nose",6],["1f621","pouting face",6],["1f620","angry face",6],["1f92c","face with symbols on mouth",10],["1f608","smiling face with horns",6],["1f47f","angry face with horns",6],["1f480","skull",6],["2620_fe0f","skull and crossbones",3.2]]},{"subgroup":"face-costume","emojis":[["1f4a9","pile of poo",6],["1f921","clown face",9],["1f479","ogre",6],["1f47a","goblin",6],["1f47b","ghost",6],["1f47d","alien",6],["1f47e","alien monster",6],["1f916","robot",8]]},{"subgroup":"cat-face","emojis":[["1f63a","grinning cat",6],["1f638","grinning cat with smiling eyes",6],["1f639","cat with tears of joy",6],["1f63b","smiling cat with heart-eyes",6],["1f63c","cat with wry smile",6],["1f63d","kissing cat",6],["1f640","weary cat",6],["1f63f","crying cat",6],["1f63e","pouting cat",6]]},{"subgroup":"monkey-face","emojis":[["1f648","see-no-evil monkey",6],["1f649","hear-no-evil monkey",6],["1f64a","speak-no-evil monkey",6]]},{"subgroup":"emotion","emojis":[["1f48b","kiss mark",6],["1f48c","love letter",6],["1f498","heart with arrow",6],["1f49d","heart with ribbon",6],["1f496","sparkling heart",6],["1f497","growing heart",6],["1f493","beating heart",6],["1f49e","revolving hearts",6],["1f495","two hearts",6],["1f49f","heart decoration",6],["2763_fe0f","heart exclamation",3.2],["1f494","broken heart",6],["2764_fe0f","red heart",3.2],["1f9e1","orange heart",10],["1f49b","yellow heart",6],["1f49a","green heart",6],["1f499","blue heart",6],["1f49c","purple heart",6],["1f90e","brown heart",12],["1f5a4","black heart",9],["1f90d","white heart",12],["1f4af","hundred points",6],["1f4a2","anger symbol",6],["1f4a5","collision",6],["1f4ab","dizzy",6],["1f4a6","sweat droplets",6],["1f4a8","dashing away",6],["1f573_fe0f","hole",7],["1f4a3","bomb",6],["1f4ac","speech balloon",6],["1f441_fe0f_200d_1f5e8_fe0f","eye in speech bubble",7],["1f5e8_fe0f","left speech bubble",7],["1f5ef_fe0f","right anger bubble",7],["1f4ad","thought balloon",6],["1f4a4","zzz",6]]}]},{"group":"People & Body","subgroups":[{"subgroup":"hand-fingers-open","emojis":[["1f44b","waving hand",6],["1f91a","raised back of hand",9],["1f590_fe0f","hand with fingers splayed",7],["270b","raised hand",6],["1f596","vulcan salute",7]]},{"subgroup":"hand-fingers-partial","emojis":[["1f44c","OK hand",6],["1f90f","pinching hand",12],["270c_fe0f","victory hand",3.2],["1f91e","crossed fingers",9],["1f91f","love-you gesture",10],["1f918","sign of the horns",8],["1f919","call me hand",9]]},{"subgroup":"hand-single-finger","emojis":[["1f448","backhand index pointing left",6],["1f449","backhand index pointing right",6],["1f446","backhand index pointing up",6],["1f595","middle finger",7],["1f447","backhand index pointing down",6],["261d_fe0f","index pointing up",3.2]]},{"subgroup":"hand-fingers-closed","emojis":[["1f44d","thumbs up",6],["1f44e","thumbs down",6],["270a","raised fist",6],["1f44a","oncoming fist",6],["1f91b","left-facing fist",9],["1f91c","right-facing fist",9]]},{"subgroup":"hands","emojis":[["1f44f","clapping hands",6],["1f64c","raising hands",6],["1f450","open hands",6],["1f932","palms up together",10],["1f91d","handshake",9],["1f64f","folded hands",6]]},{"subgroup":"hand-prop","emojis":[["270d_fe0f","writing hand",3.2],["1f485","nail polish",6],["1f933","selfie",9]]},{"subgroup":"body-parts","emojis":[["1f4aa","flexed biceps",6],["1f9be","mechanical arm",12],["1f9bf","mechanical leg",12],["1f9b5","leg",11],["1f9b6","foot",11],["1f442","ear",6],["1f9bb","ear with hearing aid",12],["1f443","nose",6],["1f9e0","brain",10],["1f9b7","tooth",11],["1f9b4","bone",11],["1f440","eyes",6],["1f441_fe0f","eye",7],["1f445","tongue",6],["1f444","mouth",6]]},{"subgroup":"person","emojis":[["1f476","baby",6],["1f9d2","child",10],["1f466","boy",6],["1f467","girl",6],["1f9d1","person",10],["1f471","person: blond hair",6],["1f468","man",6],["1f9d4","man: beard",10],["1f471_200d_2642_fe0f","man: blond hair",6],["1f468_200d_1f9b0","man: red hair",11],["1f468_200d_1f9b1","man: curly hair",11],["1f468_200d_1f9b3","man: white hair",11],["1f468_200d_1f9b2","man: bald",11],["1f469","woman",6],["1f471_200d_2640_fe0f","woman: blond hair",6],["1f469_200d_1f9b0","woman: red hair",11],["1f469_200d_1f9b1","woman: curly hair",11],["1f469_200d_1f9b3","woman: white hair",11],["1f469_200d_1f9b2","woman: bald",11],["1f9d3","older person",10],["1f474","old man",6],["1f475","old woman",6]]},{"subgroup":"person-gesture","emojis":[["1f64d","person frowning",6],["1f64d_200d_2642_fe0f","man frowning",6],["1f64d_200d_2640_fe0f","woman frowning",6],["1f64e","person pouting",6],["1f64e_200d_2642_fe0f","man pouting",6],["1f64e_200d_2640_fe0f","woman pouting",6],["1f645","person gesturing NO",6],["1f645_200d_2642_fe0f","man gesturing NO",6],["1f645_200d_2640_fe0f","woman gesturing NO",6],["1f646","person gesturing OK",6],["1f646_200d_2642_fe0f","man gesturing OK",6],["1f646_200d_2640_fe0f","woman gesturing OK",6],["1f481","person tipping hand",6],["1f481_200d_2642_fe0f","man tipping hand",6],["1f481_200d_2640_fe0f","woman tipping hand",6],["1f64b","person raising hand",6],["1f64b_200d_2642_fe0f","man raising hand",6],["1f64b_200d_2640_fe0f","woman raising hand",6],["1f9cf","deaf person",12],["1f9cf_200d_2642_fe0f","deaf man",12],["1f9cf_200d_2640_fe0f","deaf woman",12],["1f647","person bowing",6],["1f647_200d_2642_fe0f","man bowing",6],["1f647_200d_2640_fe0f","woman bowing",6],["1f926","person facepalming",9],["1f926_200d_2642_fe0f","man facepalming",9],["1f926_200d_2640_fe0f","woman facepalming",9],["1f937","person shrugging",9],["1f937_200d_2642_fe0f","man shrugging",9],["1f937_200d_2640_fe0f","woman shrugging",9]]},{"subgroup":"person-role","emojis":[["1f468_200d_2695_fe0f","man health worker",6],["1f469_200d_2695_fe0f","woman health worker",6],["1f468_200d_1f393","man student",6],["1f469_200d_1f393","woman student",6],["1f468_200d_1f3eb","man teacher",6],["1f469_200d_1f3eb","woman teacher",6],["1f468_200d_2696_fe0f","man judge",6],["1f469_200d_2696_fe0f","woman judge",6],["1f468_200d_1f33e","man farmer",6],["1f469_200d_1f33e","woman farmer",6],["1f468_200d_1f373","man cook",6],["1f469_200d_1f373","woman cook",6],["1f468_200d_1f527","man mechanic",6],["1f469_200d_1f527","woman mechanic",6],["1f468_200d_1f3ed","man factory worker",6],["1f469_200d_1f3ed","woman factory worker",6],["1f468_200d_1f4bc","man office worker",6],["1f469_200d_1f4bc","woman office worker",6],["1f468_200d_1f52c","man scientist",6],["1f469_200d_1f52c","woman scientist",6],["1f468_200d_1f4bb","man technologist",6],["1f469_200d_1f4bb","woman technologist",6],["1f468_200d_1f3a4","man singer",6],["1f469_200d_1f3a4","woman singer",6],["1f468_200d_1f3a8","man artist",6],["1f469_200d_1f3a8","woman artist",6],["1f468_200d_2708_fe0f","man pilot",6],["1f469_200d_2708_fe0f","woman pilot",6],["1f468_200d_1f680","man astronaut",6],["1f469_200d_1f680","woman astronaut",6],["1f468_200d_1f692","man firefighter",6],["1f469_200d_1f692","woman firefighter",6],["1f46e","police officer",6],["1f46e_200d_2642_fe0f","man police officer",6],["1f46e_200d_2640_fe0f","woman police officer",6],["1f575_fe0f","detective",7],["1f575_fe0f_200d_2642_fe0f","man detective",7],["1f575_fe0f_200d_2640_fe0f","woman detective",7],["1f482","guard",6],["1f482_200d_2642_fe0f","man guard",6],["1f482_200d_2640_fe0f","woman guard",6],["1f477","construction worker",6],["1f477_200d_2642_fe0f","man construction worker",6],["1f477_200d_2640_fe0f","woman construction worker",6],["1f934","prince",9],["1f478","princess",6],["1f473","person wearing turban",6],["1f473_200d_2642_fe0f","man wearing turban",6],["1f473_200d_2640_fe0f","woman wearing turban",6],["1f472","man with Chinese cap",6],["1f9d5","woman with headscarf",10],["1f935","man in tuxedo",9],["1f470","bride with veil",6],["1f930","pregnant woman",9],["1f931","breast-feeding",10]]},{"subgroup":"person-fantasy","emojis":[["1f47c","baby angel",6],["1f385","Santa Claus",6],["1f936","Mrs. Claus",9],["1f9b8","superhero",11],["1f9b8_200d_2642_fe0f","man superhero",11],["1f9b8_200d_2640_fe0f","woman superhero",11],["1f9b9","supervillain",11],["1f9b9_200d_2642_fe0f","man supervillain",11],["1f9b9_200d_2640_fe0f","woman supervillain",11],["1f9d9","mage",10],["1f9d9_200d_2642_fe0f","man mage",10],["1f9d9_200d_2640_fe0f","woman mage",10],["1f9da","fairy",10],["1f9da_200d_2642_fe0f","man fairy",10],["1f9da_200d_2640_fe0f","woman fairy",10],["1f9db","vampire",10],["1f9db_200d_2642_fe0f","man vampire",10],["1f9db_200d_2640_fe0f","woman vampire",10],["1f9dc","merperson",10],["1f9dc_200d_2642_fe0f","merman",10],["1f9dc_200d_2640_fe0f","mermaid",10],["1f9dd","elf",10],["1f9dd_200d_2642_fe0f","man elf",10],["1f9dd_200d_2640_fe0f","woman elf",10],["1f9de","genie",10],["1f9de_200d_2642_fe0f","man genie",10],["1f9de_200d_2640_fe0f","woman genie",10],["1f9df","zombie",10],["1f9df_200d_2642_fe0f","man zombie",10],["1f9df_200d_2640_fe0f","woman zombie",10]]},{"subgroup":"person-activity","emojis":[["1f486","person getting massage",6],["1f486_200d_2642_fe0f","man getting massage",6],["1f486_200d_2640_fe0f","woman getting massage",6],["1f487","person getting haircut",6],["1f487_200d_2642_fe0f","man getting haircut",6],["1f487_200d_2640_fe0f","woman getting haircut",6],["1f6b6","person walking",6],["1f6b6_200d_2642_fe0f","man walking",6],["1f6b6_200d_2640_fe0f","woman walking",6],["1f9cd","person standing",12],["1f9cd_200d_2642_fe0f","man standing",12],["1f9cd_200d_2640_fe0f","woman standing",12],["1f9ce","person kneeling",12],["1f9ce_200d_2642_fe0f","man kneeling",12],["1f9ce_200d_2640_fe0f","woman kneeling",12],["1f468_200d_1f9af","man with probing cane",12],["1f469_200d_1f9af","woman with probing cane",12],["1f468_200d_1f9bc","man in motorized wheelchair",12],["1f469_200d_1f9bc","woman in motorized wheelchair",12],["1f468_200d_1f9bd","man in manual wheelchair",12],["1f469_200d_1f9bd","woman in manual wheelchair",12],["1f3c3","person running",6],["1f3c3_200d_2642_fe0f","man running",6],["1f3c3_200d_2640_fe0f","woman running",6],["1f483","woman dancing",6],["1f57a","man dancing",9],["1f574_fe0f","man in suit levitating",7],["1f46f","people with bunny ears",6],["1f46f_200d_2642_fe0f","men with bunny ears",6],["1f46f_200d_2640_fe0f","women with bunny ears",6],["1f9d6","person in steamy room",10],["1f9d6_200d_2642_fe0f","man in steamy room",10],["1f9d6_200d_2640_fe0f","woman in steamy room",10],["1f9d7","person climbing",10],["1f9d7_200d_2642_fe0f","man climbing",10],["1f9d7_200d_2640_fe0f","woman climbing",10]]},{"subgroup":"person-sport","emojis":[["1f93a","person fencing",9],["1f3c7","horse racing",6],["26f7_fe0f","skier",5.2],["1f3c2","snowboarder",6],["1f3cc_fe0f","person golfing",7],["1f3cc_fe0f_200d_2642_fe0f","man golfing",7],["1f3cc_fe0f_200d_2640_fe0f","woman golfing",7],["1f3c4","person surfing",6],["1f3c4_200d_2642_fe0f","man surfing",6],["1f3c4_200d_2640_fe0f","woman surfing",6],["1f6a3","person rowing boat",6],["1f6a3_200d_2642_fe0f","man rowing boat",6],["1f6a3_200d_2640_fe0f","woman rowing boat",6],["1f3ca","person swimming",6],["1f3ca_200d_2642_fe0f","man swimming",6],["1f3ca_200d_2640_fe0f","woman swimming",6],["26f9_fe0f","person bouncing ball",5.2],["26f9_fe0f_200d_2642_fe0f","man bouncing ball",5.2],["26f9_fe0f_200d_2640_fe0f","woman bouncing ball",5.2],["1f3cb_fe0f","person lifting weights",7],["1f3cb_fe0f_200d_2642_fe0f","man lifting weights",7],["1f3cb_fe0f_200d_2640_fe0f","woman lifting weights",7],["1f6b4","person biking",6],["1f6b4_200d_2642_fe0f","man biking",6],["1f6b4_200d_2640_fe0f","woman biking",6],["1f6b5","person mountain biking",6],["1f6b5_200d_2642_fe0f","man mountain biking",6],["1f6b5_200d_2640_fe0f","woman mountain biking",6],["1f938","person cartwheeling",9],["1f938_200d_2642_fe0f","man cartwheeling",9],["1f938_200d_2640_fe0f","woman cartwheeling",9],["1f93c","people wrestling",9],["1f93c_200d_2642_fe0f","men wrestling",9],["1f93c_200d_2640_fe0f","women wrestling",9],["1f93d","person playing water polo",9],["1f93d_200d_2642_fe0f","man playing water polo",9],["1f93d_200d_2640_fe0f","woman playing water polo",9],["1f93e","person playing handball",9],["1f93e_200d_2642_fe0f","man playing handball",9],["1f93e_200d_2640_fe0f","woman playing handball",9],["1f939","person juggling",9],["1f939_200d_2642_fe0f","man juggling",9],["1f939_200d_2640_fe0f","woman juggling",9]]},{"subgroup":"person-resting","emojis":[["1f9d8","person in lotus position",10],["1f9d8_200d_2642_fe0f","man in lotus position",10],["1f9d8_200d_2640_fe0f","woman in lotus position",10],["1f6c0","person taking bath",6],["1f6cc","person in bed",7]]},{"subgroup":"family","emojis":[["1f9d1_200d_1f91d_200d_1f9d1","people holding hands",10],["1f46d","women holding hands",6],["1f46b","woman and man holding hands",6],["1f46c","men holding hands",6],["1f48f","kiss",6],["1f469_200d_2764_fe0f_200d_1f48b_200d_1f468","kiss: woman, man",6],["1f468_200d_2764_fe0f_200d_1f48b_200d_1f468","kiss: man, man",6],["1f469_200d_2764_fe0f_200d_1f48b_200d_1f469","kiss: woman, woman",6],["1f491","couple with heart",6],["1f469_200d_2764_fe0f_200d_1f468","couple with heart: woman, man",6],["1f468_200d_2764_fe0f_200d_1f468","couple with heart: man, man",6],["1f469_200d_2764_fe0f_200d_1f469","couple with heart: woman, woman",6],["1f46a","family",6],["1f468_200d_1f469_200d_1f466","family: man, woman, boy",6],["1f468_200d_1f469_200d_1f467","family: man, woman, girl",6],["1f468_200d_1f469_200d_1f467_200d_1f466","family: man, woman, girl, boy",6],["1f468_200d_1f469_200d_1f466_200d_1f466","family: man, woman, boy, boy",6],["1f468_200d_1f469_200d_1f467_200d_1f467","family: man, woman, girl, girl",6],["1f468_200d_1f468_200d_1f466","family: man, man, boy",6],["1f468_200d_1f468_200d_1f467","family: man, man, girl",6],["1f468_200d_1f468_200d_1f467_200d_1f466","family: man, man, girl, boy",6],["1f468_200d_1f468_200d_1f466_200d_1f466","family: man, man, boy, boy",6],["1f468_200d_1f468_200d_1f467_200d_1f467","family: man, man, girl, girl",6],["1f469_200d_1f469_200d_1f466","family: woman, woman, boy",6],["1f469_200d_1f469_200d_1f467","family: woman, woman, girl",6],["1f469_200d_1f469_200d_1f467_200d_1f466","family: woman, woman, girl, boy",6],["1f469_200d_1f469_200d_1f466_200d_1f466","family: woman, woman, boy, boy",6],["1f469_200d_1f469_200d_1f467_200d_1f467","family: woman, woman, girl, girl",6],["1f468_200d_1f466","family: man, boy",6],["1f468_200d_1f466_200d_1f466","family: man, boy, boy",6],["1f468_200d_1f467","family: man, girl",6],["1f468_200d_1f467_200d_1f466","family: man, girl, boy",6],["1f468_200d_1f467_200d_1f467","family: man, girl, girl",6],["1f469_200d_1f466","family: woman, boy",6],["1f469_200d_1f466_200d_1f466","family: woman, boy, boy",6],["1f469_200d_1f467","family: woman, girl",6],["1f469_200d_1f467_200d_1f466","family: woman, girl, boy",6],["1f469_200d_1f467_200d_1f467","family: woman, girl, girl",6]]},{"subgroup":"person-symbol","emojis":[["1f5e3_fe0f","speaking head",7],["1f464","bust in silhouette",6],["1f465","busts in silhouette",6],["1f463","footprints",6]]}]},{"group":"Component","subgroups":[{"subgroup":"skin-tone","emojis":[]},{"subgroup":"hair-style","emojis":[["1f9b0","red hair",11],["1f9b1","curly hair",11],["1f9b3","white hair",11],["1f9b2","bald",11]]}]},{"group":"Animals & Nature","subgroups":[{"subgroup":"animal-mammal","emojis":[["1f435","monkey face",6],["1f412","monkey",6],["1f98d","gorilla",9],["1f9a7","orangutan",12],["1f436","dog face",6],["1f415","dog",6],["1f9ae","guide dog",12],["1f415_200d_1f9ba","service dog",12],["1f429","poodle",6],["1f43a","wolf",6],["1f98a","fox",9],["1f99d","raccoon",11],["1f431","cat face",6],["1f408","cat",6],["1f981","lion",8],["1f42f","tiger face",6],["1f405","tiger",6],["1f406","leopard",6],["1f434","horse face",6],["1f40e","horse",6],["1f984","unicorn",8],["1f993","zebra",10],["1f98c","deer",9],["1f42e","cow face",6],["1f402","ox",6],["1f403","water buffalo",6],["1f404","cow",6],["1f437","pig face",6],["1f416","pig",6],["1f417","boar",6],["1f43d","pig nose",6],["1f40f","ram",6],["1f411","ewe",6],["1f410","goat",6],["1f42a","camel",6],["1f42b","two-hump camel",6],["1f999","llama",11],["1f992","giraffe",10],["1f418","elephant",6],["1f98f","rhinoceros",9],["1f99b","hippopotamus",11],["1f42d","mouse face",6],["1f401","mouse",6],["1f400","rat",6],["1f439","hamster",6],["1f430","rabbit face",6],["1f407","rabbit",6],["1f43f_fe0f","chipmunk",7],["1f994","hedgehog",10],["1f987","bat",9],["1f43b","bear",6],["1f428","koala",6],["1f43c","panda",6],["1f9a5","sloth",12],["1f9a6","otter",12],["1f9a8","skunk",12],["1f998","kangaroo",11],["1f9a1","badger",11],["1f43e","paw prints",6]]},{"subgroup":"animal-bird","emojis":[["1f983","turkey",8],["1f414","chicken",6],["1f413","rooster",6],["1f423","hatching chick",6],["1f424","baby chick",6],["1f425","front-facing baby chick",6],["1f426","bird",6],["1f427","penguin",6],["1f54a_fe0f","dove",7],["1f985","eagle",9],["1f986","duck",9],["1f9a2","swan",11],["1f989","owl",9],["1f9a9","flamingo",12],["1f99a","peacock",11],["1f99c","parrot",11]]},{"subgroup":"animal-amphibian","emojis":[["1f438","frog",6]]},{"subgroup":"animal-reptile","emojis":[["1f40a","crocodile",6],["1f422","turtle",6],["1f98e","lizard",9],["1f40d","snake",6],["1f432","dragon face",6],["1f409","dragon",6],["1f995","sauropod",10],["1f996","T-Rex",10]]},{"subgroup":"animal-marine","emojis":[["1f433","spouting whale",6],["1f40b","whale",6],["1f42c","dolphin",6],["1f41f","fish",6],["1f420","tropical fish",6],["1f421","blowfish",6],["1f988","shark",9],["1f419","octopus",6],["1f41a","spiral shell",6]]},{"subgroup":"animal-bug","emojis":[["1f40c","snail",6],["1f98b","butterfly",9],["1f41b","bug",6],["1f41c","ant",6],["1f41d","honeybee",6],["1f41e","lady beetle",6],["1f997","cricket",10],["1f577_fe0f","spider",7],["1f578_fe0f","spider web",7],["1f982","scorpion",8],["1f99f","mosquito",11],["1f9a0","microbe",11]]},{"subgroup":"plant-flower","emojis":[["1f490","bouquet",6],["1f338","cherry blossom",6],["1f4ae","white flower",6],["1f3f5_fe0f","rosette",7],["1f339","rose",6],["1f940","wilted flower",9],["1f33a","hibiscus",6],["1f33b","sunflower",6],["1f33c","blossom",6],["1f337","tulip",6]]},{"subgroup":"plant-other","emojis":[["1f331","seedling",6],["1f332","evergreen tree",6],["1f333","deciduous tree",6],["1f334","palm tree",6],["1f335","cactus",6],["1f33e","sheaf of rice",6],["1f33f","herb",6],["2618_fe0f","shamrock",4.1],["1f340","four leaf clover",6],["1f341","maple leaf",6],["1f342","fallen leaf",6],["1f343","leaf fluttering in wind",6]]}]},{"group":"Food & Drink","subgroups":[{"subgroup":"food-fruit","emojis":[["1f347","grapes",6],["1f348","melon",6],["1f349","watermelon",6],["1f34a","tangerine",6],["1f34b","lemon",6],["1f34c","banana",6],["1f34d","pineapple",6],["1f96d","mango",11],["1f34e","red apple",6],["1f34f","green apple",6],["1f350","pear",6],["1f351","peach",6],["1f352","cherries",6],["1f353","strawberry",6],["1f95d","kiwi fruit",9],["1f345","tomato",6],["1f965","coconut",10]]},{"subgroup":"food-vegetable","emojis":[["1f951","avocado",9],["1f346","eggplant",6],["1f954","potato",9],["1f955","carrot",9],["1f33d","ear of corn",6],["1f336_fe0f","hot pepper",7],["1f952","cucumber",9],["1f96c","leafy green",11],["1f966","broccoli",10],["1f9c4","garlic",12],["1f9c5","onion",12],["1f344","mushroom",6],["1f95c","peanuts",9],["1f330","chestnut",6]]},{"subgroup":"food-prepared","emojis":[["1f35e","bread",6],["1f950","croissant",9],["1f956","baguette bread",9],["1f968","pretzel",10],["1f96f","bagel",11],["1f95e","pancakes",9],["1f9c7","waffle",12],["1f9c0","cheese wedge",8],["1f356","meat on bone",6],["1f357","poultry leg",6],["1f969","cut of meat",10],["1f953","bacon",9],["1f354","hamburger",6],["1f35f","french fries",6],["1f355","pizza",6],["1f32d","hot dog",8],["1f96a","sandwich",10],["1f32e","taco",8],["1f32f","burrito",8],["1f959","stuffed flatbread",9],["1f9c6","falafel",12],["1f95a","egg",9],["1f373","cooking",6],["1f958","shallow pan of food",9],["1f372","pot of food",6],["1f963","bowl with spoon",10],["1f957","green salad",9],["1f37f","popcorn",8],["1f9c8","butter",12],["1f9c2","salt",11],["1f96b","canned food",10]]},{"subgroup":"food-asian","emojis":[["1f371","bento box",6],["1f358","rice cracker",6],["1f359","rice ball",6],["1f35a","cooked rice",6],["1f35b","curry rice",6],["1f35c","steaming bowl",6],["1f35d","spaghetti",6],["1f360","roasted sweet potato",6],["1f362","oden",6],["1f363","sushi",6],["1f364","fried shrimp",6],["1f365","fish cake with swirl",6],["1f96e","moon cake",11],["1f361","dango",6],["1f95f","dumpling",10],["1f960","fortune cookie",10],["1f961","takeout box",10]]},{"subgroup":"food-marine","emojis":[["1f980","crab",8],["1f99e","lobster",11],["1f990","shrimp",9],["1f991","squid",9],["1f9aa","oyster",12]]},{"subgroup":"food-sweet","emojis":[["1f366","soft ice cream",6],["1f367","shaved ice",6],["1f368","ice cream",6],["1f369","doughnut",6],["1f36a","cookie",6],["1f382","birthday cake",6],["1f370","shortcake",6],["1f9c1","cupcake",11],["1f967","pie",10],["1f36b","chocolate bar",6],["1f36c","candy",6],["1f36d","lollipop",6],["1f36e","custard",6],["1f36f","honey pot",6]]},{"subgroup":"drink","emojis":[["1f37c","baby bottle",6],["1f95b","glass of milk",9],["2615","hot beverage",4],["1f375","teacup without handle",6],["1f376","sake",6],["1f37e","bottle with popping cork",8],["1f377","wine glass",6],["1f378","cocktail glass",6],["1f379","tropical drink",6],["1f37a","beer mug",6],["1f37b","clinking beer mugs",6],["1f942","clinking glasses",9],["1f943","tumbler glass",9],["1f964","cup with straw",10],["1f9c3","beverage box",12],["1f9c9","mate",12],["1f9ca","ice cube",12]]},{"subgroup":"dishware","emojis":[["1f962","chopsticks",10],["1f37d_fe0f","fork and knife with plate",7],["1f374","fork and knife",6],["1f944","spoon",9],["1f52a","kitchen knife",6],["1f3fa","amphora",8]]}]},{"group":"Travel & Places","subgroups":[{"subgroup":"place-map","emojis":[["1f30d","globe showing Europe-Africa",6],["1f30e","globe showing Americas",6],["1f30f","globe showing Asia-Australia",6],["1f310","globe with meridians",6],["1f5fa_fe0f","world map",7],["1f5fe","map of Japan",6],["1f9ed","compass",11]]},{"subgroup":"place-geographic","emojis":[["1f3d4_fe0f","snow-capped mountain",7],["26f0_fe0f","mountain",5.2],["1f30b","volcano",6],["1f5fb","mount fuji",6],["1f3d5_fe0f","camping",7],["1f3d6_fe0f","beach with umbrella",7],["1f3dc_fe0f","desert",7],["1f3dd_fe0f","desert island",7],["1f3de_fe0f","national park",7]]},{"subgroup":"place-building","emojis":[["1f3df_fe0f","stadium",7],["1f3db_fe0f","classical building",7],["1f3d7_fe0f","building construction",7],["1f9f1","brick",11],["1f3d8_fe0f","houses",7],["1f3da_fe0f","derelict house",7],["1f3e0","house",6],["1f3e1","house with garden",6],["1f3e2","office building",6],["1f3e3","Japanese post office",6],["1f3e4","post office",6],["1f3e5","hospital",6],["1f3e6","bank",6],["1f3e8","hotel",6],["1f3e9","love hotel",6],["1f3ea","convenience store",6],["1f3eb","school",6],["1f3ec","department store",6],["1f3ed","factory",6],["1f3ef","Japanese castle",6],["1f3f0","castle",6],["1f492","wedding",6],["1f5fc","Tokyo tower",6],["1f5fd","Statue of Liberty",6]]},{"subgroup":"place-religious","emojis":[["26ea","church",5.2],["1f54c","mosque",8],["1f6d5","hindu temple",12],["1f54d","synagogue",8],["26e9_fe0f","shinto shrine",5.2],["1f54b","kaaba",8]]},{"subgroup":"place-other","emojis":[["26f2","fountain",5.2],["26fa","tent",5.2],["1f301","foggy",6],["1f303","night with stars",6],["1f3d9_fe0f","cityscape",7],["1f304","sunrise over mountains",6],["1f305","sunrise",6],["1f306","cityscape at dusk",6],["1f307","sunset",6],["1f309","bridge at night",6],["2668_fe0f","hot springs",3.2],["1f3a0","carousel horse",6],["1f3a1","ferris wheel",6],["1f3a2","roller coaster",6],["1f488","barber pole",6],["1f3aa","circus tent",6]]},{"subgroup":"transport-ground","emojis":[["1f682","locomotive",6],["1f683","railway car",6],["1f684","high-speed train",6],["1f685","bullet train",6],["1f686","train",6],["1f687","metro",6],["1f688","light rail",6],["1f689","station",6],["1f68a","tram",6],["1f69d","monorail",6],["1f69e","mountain railway",6],["1f68b","tram car",6],["1f68c","bus",6],["1f68d","oncoming bus",6],["1f68e","trolleybus",6],["1f690","minibus",6],["1f691","ambulance",6],["1f692","fire engine",6],["1f693","police car",6],["1f694","oncoming police car",6],["1f695","taxi",6],["1f696","oncoming taxi",6],["1f697","automobile",6],["1f698","oncoming automobile",6],["1f699","sport utility vehicle",6],["1f69a","delivery truck",6],["1f69b","articulated lorry",6],["1f69c","tractor",6],["1f3ce_fe0f","racing car",7],["1f3cd_fe0f","motorcycle",7],["1f6f5","motor scooter",9],["1f9bd","manual wheelchair",12],["1f9bc","motorized wheelchair",12],["1f6fa","auto rickshaw",12],["1f6b2","bicycle",6],["1f6f4","kick scooter",9],["1f6f9","skateboard",11],["1f68f","bus stop",6],["1f6e3_fe0f","motorway",7],["1f6e4_fe0f","railway track",7],["1f6e2_fe0f","oil drum",7],["26fd","fuel pump",5.2],["1f6a8","police car light",6],["1f6a5","horizontal traffic light",6],["1f6a6","vertical traffic light",6],["1f6d1","stop sign",9],["1f6a7","construction",6]]},{"subgroup":"transport-water","emojis":[["2693","anchor",4.1],["26f5","sailboat",5.2],["1f6f6","canoe",9],["1f6a4","speedboat",6],["1f6f3_fe0f","passenger ship",7],["26f4_fe0f","ferry",5.2],["1f6e5_fe0f","motor boat",7],["1f6a2","ship",6]]},{"subgroup":"transport-air","emojis":[["2708_fe0f","airplane",3.2],["1f6e9_fe0f","small airplane",7],["1f6eb","airplane departure",7],["1f6ec","airplane arrival",7],["1fa82","parachute",12],["1f4ba","seat",6],["1f681","helicopter",6],["1f69f","suspension railway",6],["1f6a0","mountain cableway",6],["1f6a1","aerial tramway",6],["1f6f0_fe0f","satellite",7],["1f680","rocket",6],["1f6f8","flying saucer",10]]},{"subgroup":"hotel","emojis":[["1f6ce_fe0f","bellhop bell",7],["1f9f3","luggage",11]]},{"subgroup":"time","emojis":[["231b","hourglass done",1.1],["23f3","hourglass not done",6],["231a","watch",1.1],["23f0","alarm clock",6],["23f1_fe0f","stopwatch",6],["23f2_fe0f","timer clock",6],["1f570_fe0f","mantelpiece clock",7],["1f55b","twelve o’clock",6],["1f567","twelve-thirty",6],["1f550","one o’clock",6],["1f55c","one-thirty",6],["1f551","two o’clock",6],["1f55d","two-thirty",6],["1f552","three o’clock",6],["1f55e","three-thirty",6],["1f553","four o’clock",6],["1f55f","four-thirty",6],["1f554","five o’clock",6],["1f560","five-thirty",6],["1f555","six o’clock",6],["1f561","six-thirty",6],["1f556","seven o’clock",6],["1f562","seven-thirty",6],["1f557","eight o’clock",6],["1f563","eight-thirty",6],["1f558","nine o’clock",6],["1f564","nine-thirty",6],["1f559","ten o’clock",6],["1f565","ten-thirty",6],["1f55a","eleven o’clock",6],["1f566","eleven-thirty",6]]},{"subgroup":"sky & weather","emojis":[["1f311","new moon",6],["1f312","waxing crescent moon",6],["1f313","first quarter moon",6],["1f314","waxing gibbous moon",6],["1f315","full moon",6],["1f316","waning gibbous moon",6],["1f317","last quarter moon",6],["1f318","waning crescent moon",6],["1f319","crescent moon",6],["1f31a","new moon face",6],["1f31b","first quarter moon face",6],["1f31c","last quarter moon face",6],["1f321_fe0f","thermometer",7],["2600_fe0f","sun",3.2],["1f31d","full moon face",6],["1f31e","sun with face",6],["1fa90","ringed planet",12],["2b50","star",5.1],["1f31f","glowing star",6],["1f320","shooting star",6],["1f30c","milky way",6],["2601_fe0f","cloud",3.2],["26c5","sun behind cloud",5.2],["26c8_fe0f","cloud with lightning and rain",5.2],["1f324_fe0f","sun behind small cloud",7],["1f325_fe0f","sun behind large cloud",7],["1f326_fe0f","sun behind rain cloud",7],["1f327_fe0f","cloud with rain",7],["1f328_fe0f","cloud with snow",7],["1f329_fe0f","cloud with lightning",7],["1f32a_fe0f","tornado",7],["1f32b_fe0f","fog",7],["1f32c_fe0f","wind face",7],["1f300","cyclone",6],["1f308","rainbow",6],["1f302","closed umbrella",6],["2602_fe0f","umbrella",3.2],["2614","umbrella with rain drops",4],["26f1_fe0f","umbrella on ground",5.2],["26a1","high voltage",4],["2744_fe0f","snowflake",3.2],["2603_fe0f","snowman",3.2],["26c4","snowman without snow",5.2],["2604_fe0f","comet",3.2],["1f525","fire",6],["1f4a7","droplet",6],["1f30a","water wave",6]]}]},{"group":"Activities","subgroups":[{"subgroup":"event","emojis":[["1f383","jack-o-lantern",6],["1f384","Christmas tree",6],["1f386","fireworks",6],["1f387","sparkler",6],["1f9e8","firecracker",11],["2728","sparkles",6],["1f388","balloon",6],["1f389","party popper",6],["1f38a","confetti ball",6],["1f38b","tanabata tree",6],["1f38d","pine decoration",6],["1f38e","Japanese dolls",6],["1f38f","carp streamer",6],["1f390","wind chime",6],["1f391","moon viewing ceremony",6],["1f9e7","red envelope",11],["1f380","ribbon",6],["1f381","wrapped gift",6],["1f397_fe0f","reminder ribbon",7],["1f39f_fe0f","admission tickets",7],["1f3ab","ticket",6]]},{"subgroup":"award-medal","emojis":[["1f396_fe0f","military medal",7],["1f3c6","trophy",6],["1f3c5","sports medal",7],["1f947","1st place medal",9],["1f948","2nd place medal",9],["1f949","3rd place medal",9]]},{"subgroup":"sport","emojis":[["26bd","soccer ball",5.2],["26be","baseball",5.2],["1f94e","softball",11],["1f3c0","basketball",6],["1f3d0","volleyball",8],["1f3c8","american football",6],["1f3c9","rugby football",6],["1f3be","tennis",6],["1f94f","flying disc",11],["1f3b3","bowling",6],["1f3cf","cricket game",8],["1f3d1","field hockey",8],["1f3d2","ice hockey",8],["1f94d","lacrosse",11],["1f3d3","ping pong",8],["1f3f8","badminton",8],["1f94a","boxing glove",9],["1f94b","martial arts uniform",9],["1f945","goal net",9],["26f3","flag in hole",5.2],["26f8_fe0f","ice skate",5.2],["1f3a3","fishing pole",6],["1f93f","diving mask",12],["1f3bd","running shirt",6],["1f3bf","skis",6],["1f6f7","sled",10],["1f94c","curling stone",10]]},{"subgroup":"game","emojis":[["1f3af","direct hit",6],["1fa80","yo-yo",12],["1fa81","kite",12],["1f3b1","pool 8 ball",6],["1f52e","crystal ball",6],["1f9ff","nazar amulet",11],["1f3ae","video game",6],["1f579_fe0f","joystick",7],["1f3b0","slot machine",6],["1f3b2","game die",6],["1f9e9","puzzle piece",11],["1f9f8","teddy bear",11],["2660_fe0f","spade suit",3.2],["2665_fe0f","heart suit",3.2],["2666_fe0f","diamond suit",3.2],["2663_fe0f","club suit",3.2],["265f_fe0f","chess pawn",3.2],["1f0cf","joker",6],["1f004","mahjong red dragon",5.1],["1f3b4","flower playing cards",6]]},{"subgroup":"arts & crafts","emojis":[["1f3ad","performing arts",6],["1f5bc_fe0f","framed picture",7],["1f3a8","artist palette",6],["1f9f5","thread",11],["1f9f6","yarn",11]]}]},{"group":"Objects","subgroups":[{"subgroup":"clothing","emojis":[["1f453","glasses",6],["1f576_fe0f","sunglasses",7],["1f97d","goggles",11],["1f97c","lab coat",11],["1f9ba","safety vest",12],["1f454","necktie",6],["1f455","t-shirt",6],["1f456","jeans",6],["1f9e3","scarf",10],["1f9e4","gloves",10],["1f9e5","coat",10],["1f9e6","socks",10],["1f457","dress",6],["1f458","kimono",6],["1f97b","sari",12],["1fa71","one-piece swimsuit",12],["1fa72","swim brief",12],["1fa73","shorts",12],["1f459","bikini",6],["1f45a","woman’s clothes",6],["1f45b","purse",6],["1f45c","handbag",6],["1f45d","clutch bag",6],["1f6cd_fe0f","shopping bags",7],["1f392","backpack",6],["1f45e","man’s shoe",6],["1f45f","running shoe",6],["1f97e","hiking boot",11],["1f97f","flat shoe",11],["1f460","high-heeled shoe",6],["1f461","woman’s sandal",6],["1fa70","ballet shoes",12],["1f462","woman’s boot",6],["1f451","crown",6],["1f452","woman’s hat",6],["1f3a9","top hat",6],["1f393","graduation cap",6],["1f9e2","billed cap",10],["26d1_fe0f","rescue worker’s helmet",5.2],["1f4ff","prayer beads",8],["1f484","lipstick",6],["1f48d","ring",6],["1f48e","gem stone",6]]},{"subgroup":"sound","emojis":[["1f507","muted speaker",6],["1f508","speaker low volume",6],["1f509","speaker medium volume",6],["1f50a","speaker high volume",6],["1f4e2","loudspeaker",6],["1f4e3","megaphone",6],["1f4ef","postal horn",6],["1f514","bell",6],["1f515","bell with slash",6]]},{"subgroup":"music","emojis":[["1f3bc","musical score",6],["1f3b5","musical note",6],["1f3b6","musical notes",6],["1f399_fe0f","studio microphone",7],["1f39a_fe0f","level slider",7],["1f39b_fe0f","control knobs",7],["1f3a4","microphone",6],["1f3a7","headphone",6],["1f4fb","radio",6]]},{"subgroup":"musical-instrument","emojis":[["1f3b7","saxophone",6],["1f3b8","guitar",6],["1f3b9","musical keyboard",6],["1f3ba","trumpet",6],["1f3bb","violin",6],["1fa95","banjo",12],["1f941","drum",9]]},{"subgroup":"phone","emojis":[["1f4f1","mobile phone",6],["1f4f2","mobile phone with arrow",6],["260e_fe0f","telephone",3.2],["1f4de","telephone receiver",6],["1f4df","pager",6],["1f4e0","fax machine",6]]},{"subgroup":"computer","emojis":[["1f50b","battery",6],["1f50c","electric plug",6],["1f4bb","laptop computer",6],["1f5a5_fe0f","desktop computer",7],["1f5a8_fe0f","printer",7],["2328_fe0f","keyboard",3.2],["1f5b1_fe0f","computer mouse",7],["1f5b2_fe0f","trackball",7],["1f4bd","computer disk",6],["1f4be","floppy disk",6],["1f4bf","optical disk",6],["1f4c0","dvd",6],["1f9ee","abacus",11]]},{"subgroup":"light & video","emojis":[["1f3a5","movie camera",6],["1f39e_fe0f","film frames",7],["1f4fd_fe0f","film projector",7],["1f3ac","clapper board",6],["1f4fa","television",6],["1f4f7","camera",6],["1f4f8","camera with flash",7],["1f4f9","video camera",6],["1f4fc","videocassette",6],["1f50d","magnifying glass tilted left",6],["1f50e","magnifying glass tilted right",6],["1f56f_fe0f","candle",7],["1f4a1","light bulb",6],["1f526","flashlight",6],["1f3ee","red paper lantern",6],["1fa94","diya lamp",12]]},{"subgroup":"book-paper","emojis":[["1f4d4","notebook with decorative cover",6],["1f4d5","closed book",6],["1f4d6","open book",6],["1f4d7","green book",6],["1f4d8","blue book",6],["1f4d9","orange book",6],["1f4da","books",6],["1f4d3","notebook",6],["1f4d2","ledger",6],["1f4c3","page with curl",6],["1f4dc","scroll",6],["1f4c4","page facing up",6],["1f4f0","newspaper",6],["1f5de_fe0f","rolled-up newspaper",7],["1f4d1","bookmark tabs",6],["1f516","bookmark",6],["1f3f7_fe0f","label",7]]},{"subgroup":"money","emojis":[["1f4b0","money bag",6],["1f4b4","yen banknote",6],["1f4b5","dollar banknote",6],["1f4b6","euro banknote",6],["1f4b7","pound banknote",6],["1f4b8","money with wings",6],["1f4b3","credit card",6],["1f9fe","receipt",11],["1f4b9","chart increasing with yen",6],["1f4b1","currency exchange",6],["1f4b2","heavy dollar sign",6]]},{"subgroup":"mail","emojis":[["2709_fe0f","envelope",3.2],["1f4e7","e-mail",6],["1f4e8","incoming envelope",6],["1f4e9","envelope with arrow",6],["1f4e4","outbox tray",6],["1f4e5","inbox tray",6],["1f4e6","package",6],["1f4eb","closed mailbox with raised flag",6],["1f4ea","closed mailbox with lowered flag",6],["1f4ec","open mailbox with raised flag",6],["1f4ed","open mailbox with lowered flag",6],["1f4ee","postbox",6],["1f5f3_fe0f","ballot box with ballot",7]]},{"subgroup":"writing","emojis":[["270f_fe0f","pencil",3.2],["2712_fe0f","black nib",3.2],["1f58b_fe0f","fountain pen",7],["1f58a_fe0f","pen",7],["1f58c_fe0f","paintbrush",7],["1f58d_fe0f","crayon",7],["1f4dd","memo",6]]},{"subgroup":"office","emojis":[["1f4bc","briefcase",6],["1f4c1","file folder",6],["1f4c2","open file folder",6],["1f5c2_fe0f","card index dividers",7],["1f4c5","calendar",6],["1f4c6","tear-off calendar",6],["1f5d2_fe0f","spiral notepad",7],["1f5d3_fe0f","spiral calendar",7],["1f4c7","card index",6],["1f4c8","chart increasing",6],["1f4c9","chart decreasing",6],["1f4ca","bar chart",6],["1f4cb","clipboard",6],["1f4cc","pushpin",6],["1f4cd","round pushpin",6],["1f4ce","paperclip",6],["1f587_fe0f","linked paperclips",7],["1f4cf","straight ruler",6],["1f4d0","triangular ruler",6],["2702_fe0f","scissors",3.2],["1f5c3_fe0f","card file box",7],["1f5c4_fe0f","file cabinet",7],["1f5d1_fe0f","wastebasket",7]]},{"subgroup":"lock","emojis":[["1f512","locked",6],["1f513","unlocked",6],["1f50f","locked with pen",6],["1f510","locked with key",6],["1f511","key",6],["1f5dd_fe0f","old key",7]]},{"subgroup":"tool","emojis":[["1f528","hammer",6],["1fa93","axe",12],["26cf_fe0f","pick",5.2],["2692_fe0f","hammer and pick",4.1],["1f6e0_fe0f","hammer and wrench",7],["1f5e1_fe0f","dagger",7],["2694_fe0f","crossed swords",4.1],["1f52b","pistol",6],["1f3f9","bow and arrow",8],["1f6e1_fe0f","shield",7],["1f527","wrench",6],["1f529","nut and bolt",6],["2699_fe0f","gear",4.1],["1f5dc_fe0f","clamp",7],["2696_fe0f","balance scale",4.1],["1f9af","probing cane",12],["1f517","link",6],["26d3_fe0f","chains",5.2],["1f9f0","toolbox",11],["1f9f2","magnet",11]]},{"subgroup":"science","emojis":[["2697_fe0f","alembic",4.1],["1f9ea","test tube",11],["1f9eb","petri dish",11],["1f9ec","dna",11],["1f52c","microscope",6],["1f52d","telescope",6],["1f4e1","satellite antenna",6]]},{"subgroup":"medical","emojis":[["1f489","syringe",6],["1fa78","drop of blood",12],["1f48a","pill",6],["1fa79","adhesive bandage",12],["1fa7a","stethoscope",12]]},{"subgroup":"household","emojis":[["1f6aa","door",6],["1f6cf_fe0f","bed",7],["1f6cb_fe0f","couch and lamp",7],["1fa91","chair",12],["1f6bd","toilet",6],["1f6bf","shower",6],["1f6c1","bathtub",6],["1fa92","razor",12],["1f9f4","lotion bottle",11],["1f9f7","safety pin",11],["1f9f9","broom",11],["1f9fa","basket",11],["1f9fb","roll of paper",11],["1f9fc","soap",11],["1f9fd","sponge",11],["1f9ef","fire extinguisher",11],["1f6d2","shopping cart",9]]},{"subgroup":"other-object","emojis":[["1f6ac","cigarette",6],["26b0_fe0f","coffin",4.1],["26b1_fe0f","funeral urn",4.1],["1f5ff","moai",6]]}]},{"group":"Symbols","subgroups":[{"subgroup":"transport-sign","emojis":[["1f3e7","ATM sign",6],["1f6ae","litter in bin sign",6],["1f6b0","potable water",6],["267f","wheelchair symbol",4.1],["1f6b9","men’s room",6],["1f6ba","women’s room",6],["1f6bb","restroom",6],["1f6bc","baby symbol",6],["1f6be","water closet",6],["1f6c2","passport control",6],["1f6c3","customs",6],["1f6c4","baggage claim",6],["1f6c5","left luggage",6]]},{"subgroup":"warning","emojis":[["26a0_fe0f","warning",4],["1f6b8","children crossing",6],["26d4","no entry",5.2],["1f6ab","prohibited",6],["1f6b3","no bicycles",6],["1f6ad","no smoking",6],["1f6af","no littering",6],["1f6b1","non-potable water",6],["1f6b7","no pedestrians",6],["1f4f5","no mobile phones",6],["1f51e","no one under eighteen",6],["2622_fe0f","radioactive",3.2],["2623_fe0f","biohazard",3.2]]},{"subgroup":"arrow","emojis":[["2b06_fe0f","up arrow",4],["2197_fe0f","up-right arrow",3.2],["27a1_fe0f","right arrow",3.2],["2198_fe0f","down-right arrow",3.2],["2b07_fe0f","down arrow",4],["2199_fe0f","down-left arrow",3.2],["2b05_fe0f","left arrow",4],["2196_fe0f","up-left arrow",3.2],["2195_fe0f","up-down arrow",3.2],["2194_fe0f","left-right arrow",3.2],["21a9_fe0f","right arrow curving left",3.2],["21aa_fe0f","left arrow curving right",3.2],["2934_fe0f","right arrow curving up",3.2],["2935_fe0f","right arrow curving down",3.2],["1f503","clockwise vertical arrows",6],["1f504","counterclockwise arrows button",6],["1f519","BACK arrow",6],["1f51a","END arrow",6],["1f51b","ON! arrow",6],["1f51c","SOON arrow",6],["1f51d","TOP arrow",6]]},{"subgroup":"religion","emojis":[["1f6d0","place of worship",8],["269b_fe0f","atom symbol",4.1],["1f549_fe0f","om",7],["2721_fe0f","star of David",3.2],["2638_fe0f","wheel of dharma",3.2],["262f_fe0f","yin yang",3.2],["271d_fe0f","latin cross",3.2],["2626_fe0f","orthodox cross",3.2],["262a_fe0f","star and crescent",3.2],["262e_fe0f","peace symbol",3.2],["1f54e","menorah",8],["1f52f","dotted six-pointed star",6]]},{"subgroup":"zodiac","emojis":[["2648","Aries",1.1],["2649","Taurus",1.1],["264a","Gemini",1.1],["264b","Cancer",1.1],["264c","Leo",1.1],["264d","Virgo",1.1],["264e","Libra",1.1],["264f","Scorpio",1.1],["2650","Sagittarius",1.1],["2651","Capricorn",1.1],["2652","Aquarius",1.1],["2653","Pisces",1.1],["26ce","Ophiuchus",6]]},{"subgroup":"av-symbol","emojis":[["1f500","shuffle tracks button",6],["1f501","repeat button",6],["1f502","repeat single button",6],["25b6_fe0f","play button",3.2],["23e9","fast-forward button",6],["23ed_fe0f","next track button",6],["23ef_fe0f","play or pause button",6],["25c0_fe0f","reverse button",3.2],["23ea","fast reverse button",6],["23ee_fe0f","last track button",6],["1f53c","upwards button",6],["23eb","fast up button",6],["1f53d","downwards button",6],["23ec","fast down button",6],["23f8_fe0f","pause button",7],["23f9_fe0f","stop button",7],["23fa_fe0f","record button",7],["23cf_fe0f","eject button",4],["1f3a6","cinema",6],["1f505","dim button",6],["1f506","bright button",6],["1f4f6","antenna bars",6],["1f4f3","vibration mode",6],["1f4f4","mobile phone off",6]]},{"subgroup":"gender","emojis":[["2640_fe0f","female sign",3.2],["2642_fe0f","male sign",3.2]]},{"subgroup":"other-symbol","emojis":[["2695_fe0f","medical symbol",4.1],["267e_fe0f","infinity",4.1],["267b_fe0f","recycling symbol",3.2],["269c_fe0f","fleur-de-lis",4.1],["1f531","trident emblem",6],["1f4db","name badge",6],["1f530","Japanese symbol for beginner",6],["2b55","hollow red circle",5.2],["2705","check mark button",6],["2611_fe0f","check box with check",3.2],["2714_fe0f","check mark",3.2],["2716_fe0f","multiplication sign",3.2],["274c","cross mark",6],["274e","cross mark button",6],["2795","plus sign",6],["2796","minus sign",6],["2797","division sign",6],["27b0","curly loop",6],["27bf","double curly loop",6],["303d_fe0f","part alternation mark",3.2],["2733_fe0f","eight-spoked asterisk",3.2],["2734_fe0f","eight-pointed star",3.2],["2747_fe0f","sparkle",3.2],["203c_fe0f","double exclamation mark",3.2],["2049_fe0f","exclamation question mark",3.2],["2753","question mark",6],["2754","white question mark",6],["2755","white exclamation mark",6],["2757","exclamation mark",5.2],["3030_fe0f","wavy dash",3.2],["00a9_fe0f","copyright",3.2],["00ae_fe0f","registered",3.2],["2122_fe0f","trade mark",3.2]]},{"subgroup":"keycap","emojis":[["0023_fe0f_20e3","keycap: #",3],["002a_fe0f_20e3","keycap: *",3],["0030_fe0f_20e3","keycap: 0",3],["0031_fe0f_20e3","keycap: 1",3],["0032_fe0f_20e3","keycap: 2",3],["0033_fe0f_20e3","keycap: 3",3],["0034_fe0f_20e3","keycap: 4",3],["0035_fe0f_20e3","keycap: 5",3],["0036_fe0f_20e3","keycap: 6",3],["0037_fe0f_20e3","keycap: 7",3],["0038_fe0f_20e3","keycap: 8",3],["0039_fe0f_20e3","keycap: 9",3],["1f51f","keycap: 10",6]]},{"subgroup":"alphanum","emojis":[["1f520","input latin uppercase",6],["1f521","input latin lowercase",6],["1f522","input numbers",6],["1f523","input symbols",6],["1f524","input latin letters",6],["1f170_fe0f","A button (blood type)",6],["1f18e","AB button (blood type)",6],["1f171_fe0f","B button (blood type)",6],["1f191","CL button",6],["1f192","COOL button",6],["1f193","FREE button",6],["2139_fe0f","information",3.2],["1f194","ID button",6],["24c2_fe0f","circled M",3.2],["1f195","NEW button",6],["1f196","NG button",6],["1f17e_fe0f","O button (blood type)",6],["1f197","OK button",6],["1f17f_fe0f","P button",5.2],["1f198","SOS button",6],["1f199","UP! button",6],["1f19a","VS button",6],["1f201","Japanese “here” button",6],["1f202_fe0f","Japanese “service charge” button",6],["1f237_fe0f","Japanese “monthly amount” button",6],["1f236","Japanese “not free of charge” button",6],["1f22f","Japanese “reserved” button",5.2],["1f250","Japanese “bargain” button",6],["1f239","Japanese “discount” button",6],["1f21a","Japanese “free of charge” button",5.2],["1f232","Japanese “prohibited” button",6],["1f251","Japanese “acceptable” button",6],["1f238","Japanese “application” button",6],["1f234","Japanese “passing grade” button",6],["1f233","Japanese “vacancy” button",6],["3297_fe0f","Japanese “congratulations” button",3.2],["3299_fe0f","Japanese “secret” button",3.2],["1f23a","Japanese “open for business” button",6],["1f235","Japanese “no vacancy” button",6]]},{"subgroup":"geometric","emojis":[["1f534","red circle",6],["1f7e0","orange circle",12],["1f7e1","yellow circle",12],["1f7e2","green circle",12],["1f535","blue circle",6],["1f7e3","purple circle",12],["1f7e4","brown circle",12],["26ab","black circle",4.1],["26aa","white circle",4.1],["1f7e5","red square",12],["1f7e7","orange square",12],["1f7e8","yellow square",12],["1f7e9","green square",12],["1f7e6","blue square",12],["1f7ea","purple square",12],["1f7eb","brown square",12],["2b1b","black large square",5.1],["2b1c","white large square",5.1],["25fc_fe0f","black medium square",3.2],["25fb_fe0f","white medium square",3.2],["25fe","black medium-small square",3.2],["25fd","white medium-small square",3.2],["25aa_fe0f","black small square",3.2],["25ab_fe0f","white small square",3.2],["1f536","large orange diamond",6],["1f537","large blue diamond",6],["1f538","small orange diamond",6],["1f539","small blue diamond",6],["1f53a","red triangle pointed up",6],["1f53b","red triangle pointed down",6],["1f4a0","diamond with a dot",6],["1f518","radio button",6],["1f533","white square button",6],["1f532","black square button",6]]}]},{"group":"Flags","subgroups":[{"subgroup":"flag","emojis":[["1f3c1","chequered flag",6],["1f6a9","triangular flag",6],["1f38c","crossed flags",6],["1f3f4","black flag",7],["1f3f3_fe0f","white flag",7],["1f3f3_fe0f_200d_1f308","rainbow flag",7],["1f3f4_200d_2620_fe0f","pirate flag",7]]},{"subgroup":"country-flag","emojis":[["1f1e6_1f1e8","flag: Ascension Island",6],["1f1e6_1f1e9","flag: Andorra",6],["1f1e6_1f1ea","flag: United Arab Emirates",6],["1f1e6_1f1eb","flag: Afghanistan",6],["1f1e6_1f1ec","flag: Antigua & Barbuda",6],["1f1e6_1f1ee","flag: Anguilla",6],["1f1e6_1f1f1","flag: Albania",6],["1f1e6_1f1f2","flag: Armenia",6],["1f1e6_1f1f4","flag: Angola",6],["1f1e6_1f1f6","flag: Antarctica",6],["1f1e6_1f1f7","flag: Argentina",6],["1f1e6_1f1f8","flag: American Samoa",6],["1f1e6_1f1f9","flag: Austria",6],["1f1e6_1f1fa","flag: Australia",6],["1f1e6_1f1fc","flag: Aruba",6],["1f1e6_1f1fd","flag: Åland Islands",6],["1f1e6_1f1ff","flag: Azerbaijan",6],["1f1e7_1f1e6","flag: Bosnia & Herzegovina",6],["1f1e7_1f1e7","flag: Barbados",6],["1f1e7_1f1e9","flag: Bangladesh",6],["1f1e7_1f1ea","flag: Belgium",6],["1f1e7_1f1eb","flag: Burkina Faso",6],["1f1e7_1f1ec","flag: Bulgaria",6],["1f1e7_1f1ed","flag: Bahrain",6],["1f1e7_1f1ee","flag: Burundi",6],["1f1e7_1f1ef","flag: Benin",6],["1f1e7_1f1f1","flag: St. Barthélemy",6],["1f1e7_1f1f2","flag: Bermuda",6],["1f1e7_1f1f3","flag: Brunei",6],["1f1e7_1f1f4","flag: Bolivia",6],["1f1e7_1f1f6","flag: Caribbean Netherlands",6],["1f1e7_1f1f7","flag: Brazil",6],["1f1e7_1f1f8","flag: Bahamas",6],["1f1e7_1f1f9","flag: Bhutan",6],["1f1e7_1f1fb","flag: Bouvet Island",6],["1f1e7_1f1fc","flag: Botswana",6],["1f1e7_1f1fe","flag: Belarus",6],["1f1e7_1f1ff","flag: Belize",6],["1f1e8_1f1e6","flag: Canada",6],["1f1e8_1f1e8","flag: Cocos (Keeling) Islands",6],["1f1e8_1f1e9","flag: Congo - Kinshasa",6],["1f1e8_1f1eb","flag: Central African Republic",6],["1f1e8_1f1ec","flag: Congo - Brazzaville",6],["1f1e8_1f1ed","flag: Switzerland",6],["1f1e8_1f1ee","flag: Côte d’Ivoire",6],["1f1e8_1f1f0","flag: Cook Islands",6],["1f1e8_1f1f1","flag: Chile",6],["1f1e8_1f1f2","flag: Cameroon",6],["1f1e8_1f1f3","flag: China",6],["1f1e8_1f1f4","flag: Colombia",6],["1f1e8_1f1f5","flag: Clipperton Island",6],["1f1e8_1f1f7","flag: Costa Rica",6],["1f1e8_1f1fa","flag: Cuba",6],["1f1e8_1f1fb","flag: Cape Verde",6],["1f1e8_1f1fc","flag: Curaçao",6],["1f1e8_1f1fd","flag: Christmas Island",6],["1f1e8_1f1fe","flag: Cyprus",6],["1f1e8_1f1ff","flag: Czechia",6],["1f1e9_1f1ea","flag: Germany",6],["1f1e9_1f1ec","flag: Diego Garcia",6],["1f1e9_1f1ef","flag: Djibouti",6],["1f1e9_1f1f0","flag: Denmark",6],["1f1e9_1f1f2","flag: Dominica",6],["1f1e9_1f1f4","flag: Dominican Republic",6],["1f1e9_1f1ff","flag: Algeria",6],["1f1ea_1f1e6","flag: Ceuta & Melilla",6],["1f1ea_1f1e8","flag: Ecuador",6],["1f1ea_1f1ea","flag: Estonia",6],["1f1ea_1f1ec","flag: Egypt",6],["1f1ea_1f1ed","flag: Western Sahara",6],["1f1ea_1f1f7","flag: Eritrea",6],["1f1ea_1f1f8","flag: Spain",6],["1f1ea_1f1f9","flag: Ethiopia",6],["1f1ea_1f1fa","flag: European Union",6],["1f1eb_1f1ee","flag: Finland",6],["1f1eb_1f1ef","flag: Fiji",6],["1f1eb_1f1f0","flag: Falkland Islands",6],["1f1eb_1f1f2","flag: Micronesia",6],["1f1eb_1f1f4","flag: Faroe Islands",6],["1f1eb_1f1f7","flag: France",6],["1f1ec_1f1e6","flag: Gabon",6],["1f1ec_1f1e7","flag: United Kingdom",6],["1f1ec_1f1e9","flag: Grenada",6],["1f1ec_1f1ea","flag: Georgia",6],["1f1ec_1f1eb","flag: French Guiana",6],["1f1ec_1f1ec","flag: Guernsey",6],["1f1ec_1f1ed","flag: Ghana",6],["1f1ec_1f1ee","flag: Gibraltar",6],["1f1ec_1f1f1","flag: Greenland",6],["1f1ec_1f1f2","flag: Gambia",6],["1f1ec_1f1f3","flag: Guinea",6],["1f1ec_1f1f5","flag: Guadeloupe",6],["1f1ec_1f1f6","flag: Equatorial Guinea",6],["1f1ec_1f1f7","flag: Greece",6],["1f1ec_1f1f8","flag: South Georgia & South Sandwich Islands",6],["1f1ec_1f1f9","flag: Guatemala",6],["1f1ec_1f1fa","flag: Guam",6],["1f1ec_1f1fc","flag: Guinea-Bissau",6],["1f1ec_1f1fe","flag: Guyana",6],["1f1ed_1f1f0","flag: Hong Kong SAR China",6],["1f1ed_1f1f2","flag: Heard & McDonald Islands",6],["1f1ed_1f1f3","flag: Honduras",6],["1f1ed_1f1f7","flag: Croatia",6],["1f1ed_1f1f9","flag: Haiti",6],["1f1ed_1f1fa","flag: Hungary",6],["1f1ee_1f1e8","flag: Canary Islands",6],["1f1ee_1f1e9","flag: Indonesia",6],["1f1ee_1f1ea","flag: Ireland",6],["1f1ee_1f1f1","flag: Israel",6],["1f1ee_1f1f2","flag: Isle of Man",6],["1f1ee_1f1f3","flag: India",6],["1f1ee_1f1f4","flag: British Indian Ocean Territory",6],["1f1ee_1f1f6","flag: Iraq",6],["1f1ee_1f1f7","flag: Iran",6],["1f1ee_1f1f8","flag: Iceland",6],["1f1ee_1f1f9","flag: Italy",6],["1f1ef_1f1ea","flag: Jersey",6],["1f1ef_1f1f2","flag: Jamaica",6],["1f1ef_1f1f4","flag: Jordan",6],["1f1ef_1f1f5","flag: Japan",6],["1f1f0_1f1ea","flag: Kenya",6],["1f1f0_1f1ec","flag: Kyrgyzstan",6],["1f1f0_1f1ed","flag: Cambodia",6],["1f1f0_1f1ee","flag: Kiribati",6],["1f1f0_1f1f2","flag: Comoros",6],["1f1f0_1f1f3","flag: St. Kitts & Nevis",6],["1f1f0_1f1f5","flag: North Korea",6],["1f1f0_1f1f7","flag: South Korea",6],["1f1f0_1f1fc","flag: Kuwait",6],["1f1f0_1f1fe","flag: Cayman Islands",6],["1f1f0_1f1ff","flag: Kazakhstan",6],["1f1f1_1f1e6","flag: Laos",6],["1f1f1_1f1e7","flag: Lebanon",6],["1f1f1_1f1e8","flag: St. Lucia",6],["1f1f1_1f1ee","flag: Liechtenstein",6],["1f1f1_1f1f0","flag: Sri Lanka",6],["1f1f1_1f1f7","flag: Liberia",6],["1f1f1_1f1f8","flag: Lesotho",6],["1f1f1_1f1f9","flag: Lithuania",6],["1f1f1_1f1fa","flag: Luxembourg",6],["1f1f1_1f1fb","flag: Latvia",6],["1f1f1_1f1fe","flag: Libya",6],["1f1f2_1f1e6","flag: Morocco",6],["1f1f2_1f1e8","flag: Monaco",6],["1f1f2_1f1e9","flag: Moldova",6],["1f1f2_1f1ea","flag: Montenegro",6],["1f1f2_1f1eb","flag: St. Martin",6],["1f1f2_1f1ec","flag: Madagascar",6],["1f1f2_1f1ed","flag: Marshall Islands",6],["1f1f2_1f1f0","flag: Macedonia",6],["1f1f2_1f1f1","flag: Mali",6],["1f1f2_1f1f2","flag: Myanmar (Burma)",6],["1f1f2_1f1f3","flag: Mongolia",6],["1f1f2_1f1f4","flag: Macao SAR China",6],["1f1f2_1f1f5","flag: Northern Mariana Islands",6],["1f1f2_1f1f6","flag: Martinique",6],["1f1f2_1f1f7","flag: Mauritania",6],["1f1f2_1f1f8","flag: Montserrat",6],["1f1f2_1f1f9","flag: Malta",6],["1f1f2_1f1fa","flag: Mauritius",6],["1f1f2_1f1fb","flag: Maldives",6],["1f1f2_1f1fc","flag: Malawi",6],["1f1f2_1f1fd","flag: Mexico",6],["1f1f2_1f1fe","flag: Malaysia",6],["1f1f2_1f1ff","flag: Mozambique",6],["1f1f3_1f1e6","flag: Namibia",6],["1f1f3_1f1e8","flag: New Caledonia",6],["1f1f3_1f1ea","flag: Niger",6],["1f1f3_1f1eb","flag: Norfolk Island",6],["1f1f3_1f1ec","flag: Nigeria",6],["1f1f3_1f1ee","flag: Nicaragua",6],["1f1f3_1f1f1","flag: Netherlands",6],["1f1f3_1f1f4","flag: Norway",6],["1f1f3_1f1f5","flag: Nepal",6],["1f1f3_1f1f7","flag: Nauru",6],["1f1f3_1f1fa","flag: Niue",6],["1f1f3_1f1ff","flag: New Zealand",6],["1f1f4_1f1f2","flag: Oman",6],["1f1f5_1f1e6","flag: Panama",6],["1f1f5_1f1ea","flag: Peru",6],["1f1f5_1f1eb","flag: French Polynesia",6],["1f1f5_1f1ec","flag: Papua New Guinea",6],["1f1f5_1f1ed","flag: Philippines",6],["1f1f5_1f1f0","flag: Pakistan",6],["1f1f5_1f1f1","flag: Poland",6],["1f1f5_1f1f2","flag: St. Pierre & Miquelon",6],["1f1f5_1f1f3","flag: Pitcairn Islands",6],["1f1f5_1f1f7","flag: Puerto Rico",6],["1f1f5_1f1f8","flag: Palestinian Territories",6],["1f1f5_1f1f9","flag: Portugal",6],["1f1f5_1f1fc","flag: Palau",6],["1f1f5_1f1fe","flag: Paraguay",6],["1f1f6_1f1e6","flag: Qatar",6],["1f1f7_1f1ea","flag: Réunion",6],["1f1f7_1f1f4","flag: Romania",6],["1f1f7_1f1f8","flag: Serbia",6],["1f1f7_1f1fa","flag: Russia",6],["1f1f7_1f1fc","flag: Rwanda",6],["1f1f8_1f1e6","flag: Saudi Arabia",6],["1f1f8_1f1e7","flag: Solomon Islands",6],["1f1f8_1f1e8","flag: Seychelles",6],["1f1f8_1f1e9","flag: Sudan",6],["1f1f8_1f1ea","flag: Sweden",6],["1f1f8_1f1ec","flag: Singapore",6],["1f1f8_1f1ed","flag: St. Helena",6],["1f1f8_1f1ee","flag: Slovenia",6],["1f1f8_1f1ef","flag: Svalbard & Jan Mayen",6],["1f1f8_1f1f0","flag: Slovakia",6],["1f1f8_1f1f1","flag: Sierra Leone",6],["1f1f8_1f1f2","flag: San Marino",6],["1f1f8_1f1f3","flag: Senegal",6],["1f1f8_1f1f4","flag: Somalia",6],["1f1f8_1f1f7","flag: Suriname",6],["1f1f8_1f1f8","flag: South Sudan",6],["1f1f8_1f1f9","flag: São Tomé & Príncipe",6],["1f1f8_1f1fb","flag: El Salvador",6],["1f1f8_1f1fd","flag: Sint Maarten",6],["1f1f8_1f1fe","flag: Syria",6],["1f1f8_1f1ff","flag: Eswatini",6],["1f1f9_1f1e6","flag: Tristan da Cunha",6],["1f1f9_1f1e8","flag: Turks & Caicos Islands",6],["1f1f9_1f1e9","flag: Chad",6],["1f1f9_1f1eb","flag: French Southern Territories",6],["1f1f9_1f1ec","flag: Togo",6],["1f1f9_1f1ed","flag: Thailand",6],["1f1f9_1f1ef","flag: Tajikistan",6],["1f1f9_1f1f0","flag: Tokelau",6],["1f1f9_1f1f1","flag: Timor-Leste",6],["1f1f9_1f1f2","flag: Turkmenistan",6],["1f1f9_1f1f3","flag: Tunisia",6],["1f1f9_1f1f4","flag: Tonga",6],["1f1f9_1f1f7","flag: Turkey",6],["1f1f9_1f1f9","flag: Trinidad & Tobago",6],["1f1f9_1f1fb","flag: Tuvalu",6],["1f1f9_1f1fc","flag: Taiwan",6],["1f1f9_1f1ff","flag: Tanzania",6],["1f1fa_1f1e6","flag: Ukraine",6],["1f1fa_1f1ec","flag: Uganda",6],["1f1fa_1f1f2","flag: U.S. Outlying Islands",6],["1f1fa_1f1f3","flag: United Nations",6],["1f1fa_1f1f8","flag: United States",6],["1f1fa_1f1fe","flag: Uruguay",6],["1f1fa_1f1ff","flag: Uzbekistan",6],["1f1fb_1f1e6","flag: Vatican City",6],["1f1fb_1f1e8","flag: St. Vincent & Grenadines",6],["1f1fb_1f1ea","flag: Venezuela",6],["1f1fb_1f1ec","flag: British Virgin Islands",6],["1f1fb_1f1ee","flag: U.S. Virgin Islands",6],["1f1fb_1f1f3","flag: Vietnam",6],["1f1fb_1f1fa","flag: Vanuatu",6],["1f1fc_1f1eb","flag: Wallis & Futuna",6],["1f1fc_1f1f8","flag: Samoa",6],["1f1fd_1f1f0","flag: Kosovo",6],["1f1fe_1f1ea","flag: Yemen",6],["1f1fe_1f1f9","flag: Mayotte",6],["1f1ff_1f1e6","flag: South Africa",6],["1f1ff_1f1f2","flag: Zambia",6],["1f1ff_1f1fc","flag: Zimbabwe",6]]},{"subgroup":"subdivision-flag","emojis":[["1f3f4_e0067_e0062_e0065_e006e_e0067_e007f","flag: England",7],["1f3f4_e0067_e0062_e0073_e0063_e0074_e007f","flag: Scotland",7],["1f3f4_e0067_e0062_e0077_e006c_e0073_e007f","flag: Wales",7]]}]}],"extraTests":[{"name":"unsupported windows 7, chrome 49 (overlaps with v6, v5.2, v4.1, despite support for the majority of these versions)","test":"1f31d","codes":["26b0_fe0f","26b1_fe0f","26f7_fe0f","26f9_fe0f","26f9_fe0f_200d_2642_fe0f","26f9_fe0f_200d_2640_fe0f","26f0_fe0f","26e9_fe0f","26f4_fe0f","26c8_fe0f","26f1_fe0f","26f8_fe0f","26d1_fe0f","26cf_fe0f","26d3_fe0f","1f4ad","1f64d_200d_2642_fe0f","1f64d_200d_2640_fe0f","1f64e_200d_2642_fe0f","1f64e_200d_2640_fe0f","1f645_200d_2642_fe0f","1f645_200d_2640_fe0f","1f646_200d_2642_fe0f","1f646_200d_2640_fe0f","1f481_200d_2642_fe0f","1f481_200d_2640_fe0f","1f64b_200d_2642_fe0f","1f64b_200d_2640_fe0f","1f647_200d_2642_fe0f","1f647_200d_2640_fe0f","1f468_200d_2695_fe0f","1f469_200d_2695_fe0f","1f468_200d_1f393","1f469_200d_1f393","1f468_200d_1f3eb","1f469_200d_1f3eb","1f468_200d_2696_fe0f","1f469_200d_2696_fe0f","1f468_200d_1f33e","1f469_200d_1f33e","1f468_200d_1f373","1f469_200d_1f373","1f468_200d_1f527","1f469_200d_1f527","1f468_200d_1f3ed","1f469_200d_1f3ed","1f468_200d_1f4bc","1f469_200d_1f4bc","1f468_200d_1f52c","1f469_200d_1f52c","1f468_200d_1f4bb","1f469_200d_1f4bb","1f468_200d_1f3a4","1f469_200d_1f3a4","1f468_200d_1f3a8","1f469_200d_1f3a8","1f468_200d_2708_fe0f","1f469_200d_2708_fe0f","1f468_200d_1f680","1f469_200d_1f680","1f468_200d_1f692","1f469_200d_1f692","1f46e_200d_2642_fe0f","1f46e_200d_2640_fe0f","1f482_200d_2642_fe0f","1f482_200d_2640_fe0f","1f477_200d_2642_fe0f","1f477_200d_2640_fe0f","1f473","1f473_200d_2642_fe0f","1f473_200d_2640_fe0f","1f486_200d_2642_fe0f","1f486_200d_2640_fe0f","1f487_200d_2642_fe0f","1f487_200d_2640_fe0f","1f6b6_200d_2642_fe0f","1f6b6_200d_2640_fe0f","1f3c3_200d_2642_fe0f","1f3c3_200d_2640_fe0f","1f46f_200d_2642_fe0f","1f46f_200d_2640_fe0f","1f3c4_200d_2642_fe0f","1f3c4_200d_2640_fe0f","1f6a3","1f6a3_200d_2642_fe0f","1f6a3_200d_2640_fe0f","1f3ca_200d_2642_fe0f","1f3ca_200d_2640_fe0f","1f6b4","1f6b4_200d_2642_fe0f","1f6b4_200d_2640_fe0f","1f6b5","1f6b5_200d_2642_fe0f","1f6b5_200d_2640_fe0f","1f46d","1f46c","1f469_200d_2764_fe0f_200d_1f48b_200d_1f468","1f468_200d_2764_fe0f_200d_1f48b_200d_1f468","1f469_200d_2764_fe0f_200d_1f48b_200d_1f469","1f469_200d_2764_fe0f_200d_1f468","1f468_200d_2764_fe0f_200d_1f468","1f469_200d_2764_fe0f_200d_1f469","1f468_200d_1f469_200d_1f466","1f468_200d_1f469_200d_1f467","1f468_200d_1f469_200d_1f467_200d_1f466","1f468_200d_1f469_200d_1f466_200d_1f466","1f468_200d_1f469_200d_1f467_200d_1f467","1f468_200d_1f468_200d_1f466","1f468_200d_1f468_200d_1f467","1f468_200d_1f468_200d_1f467_200d_1f466","1f468_200d_1f468_200d_1f466_200d_1f466","1f468_200d_1f468_200d_1f467_200d_1f467","1f469_200d_1f469_200d_1f466","1f469_200d_1f469_200d_1f467","1f469_200d_1f469_200d_1f467_200d_1f466","1f469_200d_1f469_200d_1f466_200d_1f466","1f469_200d_1f469_200d_1f467_200d_1f467","1f468_200d_1f466","1f468_200d_1f466_200d_1f466","1f468_200d_1f467","1f468_200d_1f467_200d_1f466","1f468_200d_1f467_200d_1f467","1f469_200d_1f466","1f469_200d_1f466_200d_1f466","1f469_200d_1f467","1f469_200d_1f467_200d_1f466","1f469_200d_1f467_200d_1f467","1f465","1f415","1f408","1f405","1f406","1f402","1f403","1f404","1f416","1f40f","1f410","1f42a","1f401","1f400","1f407","1f413","1f40a","1f409","1f40b","1f332","1f333","1f34b","1f350","1f37c","1f30d","1f30e","1f310","1f3e4","1f682","1f686","1f688","1f68a","1f69d","1f69e","1f68b","1f68d","1f68e","1f690","1f694","1f696","1f698","1f69b","1f69c","1f6a6","1f681","1f69f","1f6a0","1f6a1","23f1_fe0f","23f2_fe0f","1f567","1f55c","1f55d","1f55e","1f55f","1f560","1f561","1f562","1f563","1f564","1f565","1f566","1f312","1f316","1f317","1f318","1f31a","1f31c","1f31d","1f31e","1f3c9","1f507","1f508","1f509","1f4ef","1f515","1f4b6","1f4b7","1f4ec","1f4ed","1f52c","1f52d","1f6bf","1f6c1","1f6ae","1f6b0","1f6c2","1f6c3","1f6c4","1f6c5","1f6b8","1f6b3","1f6af","1f6b1","1f6b7","1f4f5","1f504","1f500","1f501","1f502","23ed_fe0f","23ef_fe0f","23ee_fe0f","1f505","1f506","1f1e6_1f1e8","1f1e6_1f1e9","1f1e6_1f1ea","1f1e6_1f1eb","1f1e6_1f1ec","1f1e6_1f1ee","1f1e6_1f1f1","1f1e6_1f1f2","1f1e6_1f1f4","1f1e6_1f1f6","1f1e6_1f1f7","1f1e6_1f1f8","1f1e6_1f1f9","1f1e6_1f1fa","1f1e6_1f1fc","1f1e6_1f1fd","1f1e6_1f1ff","1f1e7_1f1e6","1f1e7_1f1e7","1f1e7_1f1e9","1f1e7_1f1ea","1f1e7_1f1eb","1f1e7_1f1ec","1f1e7_1f1ed","1f1e7_1f1ee","1f1e7_1f1ef","1f1e7_1f1f1","1f1e7_1f1f2","1f1e7_1f1f3","1f1e7_1f1f4","1f1e7_1f1f6","1f1e7_1f1f7","1f1e7_1f1f8","1f1e7_1f1f9","1f1e7_1f1fb","1f1e7_1f1fc","1f1e7_1f1fe","1f1e7_1f1ff","1f1e8_1f1e6","1f1e8_1f1e8","1f1e8_1f1e9","1f1e8_1f1eb","1f1e8_1f1ec","1f1e8_1f1ed","1f1e8_1f1ee","1f1e8_1f1f0","1f1e8_1f1f1","1f1e8_1f1f2","1f1e8_1f1f3","1f1e8_1f1f4","1f1e8_1f1f5","1f1e8_1f1f7","1f1e8_1f1fa","1f1e8_1f1fb","1f1e8_1f1fc","1f1e8_1f1fd","1f1e8_1f1fe","1f1e8_1f1ff","1f1e9_1f1ea","1f1e9_1f1ec","1f1e9_1f1ef","1f1e9_1f1f0","1f1e9_1f1f2","1f1e9_1f1f4","1f1e9_1f1ff","1f1ea_1f1e6","1f1ea_1f1e8","1f1ea_1f1ea","1f1ea_1f1ec","1f1ea_1f1ed","1f1ea_1f1f7","1f1ea_1f1f8","1f1ea_1f1f9","1f1ea_1f1fa","1f1eb_1f1ee","1f1eb_1f1ef","1f1eb_1f1f0","1f1eb_1f1f2","1f1eb_1f1f4","1f1eb_1f1f7","1f1ec_1f1e6","1f1ec_1f1e7","1f1ec_1f1e9","1f1ec_1f1ea","1f1ec_1f1eb","1f1ec_1f1ec","1f1ec_1f1ed","1f1ec_1f1ee","1f1ec_1f1f1","1f1ec_1f1f2","1f1ec_1f1f3","1f1ec_1f1f5","1f1ec_1f1f6","1f1ec_1f1f7","1f1ec_1f1f8","1f1ec_1f1f9","1f1ec_1f1fa","1f1ec_1f1fc","1f1ec_1f1fe","1f1ed_1f1f0","1f1ed_1f1f2","1f1ed_1f1f3","1f1ed_1f1f7","1f1ed_1f1f9","1f1ed_1f1fa","1f1ee_1f1e8","1f1ee_1f1e9","1f1ee_1f1ea","1f1ee_1f1f1","1f1ee_1f1f2","1f1ee_1f1f3","1f1ee_1f1f4","1f1ee_1f1f6","1f1ee_1f1f7","1f1ee_1f1f8","1f1ee_1f1f9","1f1ef_1f1ea","1f1ef_1f1f2","1f1ef_1f1f4","1f1ef_1f1f5","1f1f0_1f1ea","1f1f0_1f1ec","1f1f0_1f1ed","1f1f0_1f1ee","1f1f0_1f1f2","1f1f0_1f1f3","1f1f0_1f1f5","1f1f0_1f1f7","1f1f0_1f1fc","1f1f0_1f1fe","1f1f0_1f1ff","1f1f1_1f1e6","1f1f1_1f1e7","1f1f1_1f1e8","1f1f1_1f1ee","1f1f1_1f1f0","1f1f1_1f1f7","1f1f1_1f1f8","1f1f1_1f1f9","1f1f1_1f1fa","1f1f1_1f1fb","1f1f1_1f1fe","1f1f2_1f1e6","1f1f2_1f1e8","1f1f2_1f1e9","1f1f2_1f1ea","1f1f2_1f1eb","1f1f2_1f1ec","1f1f2_1f1ed","1f1f2_1f1f0","1f1f2_1f1f1","1f1f2_1f1f2","1f1f2_1f1f3","1f1f2_1f1f4","1f1f2_1f1f5","1f1f2_1f1f6","1f1f2_1f1f7","1f1f2_1f1f8","1f1f2_1f1f9","1f1f2_1f1fa","1f1f2_1f1fb","1f1f2_1f1fc","1f1f2_1f1fd","1f1f2_1f1fe","1f1f2_1f1ff","1f1f3_1f1e6","1f1f3_1f1e8","1f1f3_1f1ea","1f1f3_1f1eb","1f1f3_1f1ec","1f1f3_1f1ee","1f1f3_1f1f1","1f1f3_1f1f4","1f1f3_1f1f5","1f1f3_1f1f7","1f1f3_1f1fa","1f1f3_1f1ff","1f1f4_1f1f2","1f1f5_1f1e6","1f1f5_1f1ea","1f1f5_1f1eb","1f1f5_1f1ec","1f1f5_1f1ed","1f1f5_1f1f0","1f1f5_1f1f1","1f1f5_1f1f2","1f1f5_1f1f3","1f1f5_1f1f7","1f1f5_1f1f8","1f1f5_1f1f9","1f1f5_1f1fc","1f1f5_1f1fe","1f1f6_1f1e6","1f1f7_1f1ea","1f1f7_1f1f4","1f1f7_1f1f8","1f1f7_1f1fa","1f1f7_1f1fc","1f1f8_1f1e6","1f1f8_1f1e7","1f1f8_1f1e8","1f1f8_1f1e9","1f1f8_1f1ea","1f1f8_1f1ec","1f1f8_1f1ed","1f1f8_1f1ee","1f1f8_1f1ef","1f1f8_1f1f0","1f1f8_1f1f1","1f1f8_1f1f2","1f1f8_1f1f3","1f1f8_1f1f4","1f1f8_1f1f7","1f1f8_1f1f8","1f1f8_1f1f9","1f1f8_1f1fb","1f1f8_1f1fd","1f1f8_1f1fe","1f1f8_1f1ff","1f1f9_1f1e6","1f1f9_1f1e8","1f1f9_1f1e9","1f1f9_1f1eb","1f1f9_1f1ec","1f1f9_1f1ed","1f1f9_1f1ef","1f1f9_1f1f0","1f1f9_1f1f1","1f1f9_1f1f2","1f1f9_1f1f3","1f1f9_1f1f4","1f1f9_1f1f7","1f1f9_1f1f9","1f1f9_1f1fb","1f1f9_1f1fc","1f1f9_1f1ff","1f1fa_1f1e6","1f1fa_1f1ec","1f1fa_1f1f2","1f1fa_1f1f3","1f1fa_1f1f8","1f1fa_1f1fe","1f1fa_1f1ff","1f1fb_1f1e6","1f1fb_1f1e8","1f1fb_1f1ea","1f1fb_1f1ec","1f1fb_1f1ee","1f1fb_1f1f3","1f1fb_1f1fa","1f1fc_1f1eb","1f1fc_1f1f8","1f1fd_1f1f0","1f1fe_1f1ea","1f1fe_1f1f9","1f1ff_1f1e6","1f1ff_1f1f2","1f1ff_1f1fc"]}]}'
      );
    }),
    n.register("3utT5", function (a, i) {
      e(a.exports, "ZINDEX_FIREWORKS", () => g), e(a.exports, "default", () => u);
      var o = n("iPbYd"),
        t = n("3pr9z"),
        r = n("7b0kr"),
        _ = n("lkeHE"),
        s = n("lJSJc"),
        l = n("5Gpcw"),
        d = n("fueUa"),
        c = n("fDLJ6");
      const g = 10;
      class u extends r.Component {
        componentDidMount() {
          if (this.canvasRef.current) {
            const f = this.canvasRef.current.getContext("2d");
            (this.app = new b(f)), window.addEventListener("resize", this.doResize, !1);
          }
        }
        componentWillUnmount() {
          this.app && (this.app.active = !1), window.removeEventListener("resize", this.doResize);
        }
        render() {
          if (!this.canRender) return null;
          const e = this.state,
            a = e.width,
            i = e.height,
            o = Object.assign(
              {
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "transparent",
                pointerEvents: "none",
                zIndex: g
              },
              this.props.style
            );
          return f(r).createElement("canvas", { ref: this.canvasRef, style: o, width: a, height: i });
        }
        constructor(e) {
          super(e),
            (0, o.default)(this, "doResize", (f) => {
              this.app && this.app.sizeCanvas();
            }),
            (this.state = { width: window.innerWidth, height: window.innerHeight }),
            (this.canvasRef = f(r).createRef()),
            (this.canRender = (0, c.getMaxVersion)() > 0);
        }
      }
      (0, o.default)(u, "propTypes", { style: f(t).object });
      class b {
        sizeCanvas() {
          (this.w = this.ctx.canvas.width = window.innerWidth), (this.h = this.ctx.canvas.height = window.innerHeight);
        }
        clearIt() {
          this.ctx.clearRect(0, 0, this.w, this.h);
        }
        draw(f) {
          if (!this.active) return;
          this.clearIt(),
            (-1 === this.maxNumFireworks || this.maxNumFireworks > this.numFireworks) &&
              this.rnd.chance(6) &&
              ((this.numFireworks += 1), this.fireworks.push(new m(this)));
          const e = [];
          this.fireworks.forEach((f) => {
            f.alive ? f.draw() : e.push(f);
          }),
            e.forEach((f) => {
              w(this.fireworks, f);
            }),
            window.setTimeout(() => {
              window.requestAnimationFrame((f) => {
                this.draw(f);
              });
            }, 28);
        }
        constructor(f, e) {
          let a = void 0 === e ? -1 : e;
          (this.active = !0),
            (this.maxNumFireworks = a),
            (this.numFireworks = 0),
            (this.ctx = f),
            this.sizeCanvas(),
            (this.rnd = new (0, _.Random)()),
            (this.fireworks = []),
            (this.forces = { gravity: new (0, s.TinyVector)(0, 0.2) }),
            (this.emojiSize = 160);
          (this.emojisCache = new h(this, ["😀", "⭐", "🍬"], this.emojiSize)),
            window.requestAnimationFrame((f) => {
              this.draw(f);
            });
        }
      }
      class h {
        pick() {
          return this.rnd.pick(this.ctxs);
        }
        constructor(f, e, a) {
          let i = void 0 === a ? 128 : a;
          (this.rnd = f.rnd), (this.emojis = e), (this.ctxSize = i), (this.ctxs = []);
          const o = (0, l.getIsWindows)();
          this.emojis.forEach((f) => {
            const e = document.createElement("canvas").getContext("2d");
            e.canvas.width = e.canvas.height = this.ctxSize;
            const a = this.ctxSize;
            let i = a * (o ? 0.75 : 1);
            if (i < 40) {
              const f = -6;
              (i = (i * (40 - f)) / 40 + f), (i = Math.max(1, i));
            }
            (e.fillStyle = `hsl(${this.rnd.int(360)},90%,50%)`),
              (e.textBaseline = "middle"),
              (e.textAlign = "center"),
              (e.font = `${i}px ${d.FONT_FAMILY_EMOJIS}`),
              e.fillText(f, a / 2, a / 2 + 0.1 * a),
              this.ctxs.push(e);
          });
        }
      }
      class m {
        reset() {
          (this.color = `hsl(${this.rnd.int(360)},90%,50%)`),
            (this.alive = !0),
            (this.bursting = !1),
            (this.pos = new (0, s.TinyVector)(this.rnd.int(0, this.app.w), this.app.h + 40)),
            (this.vel = new (0, s.TinyVector)(0, -this.rnd.real(12, this.app.h / 45))),
            (this.acc = new (0, s.TinyVector)(0, 0)),
            (this.scale = this.rnd.real(0.125, 0.5)),
            (this.emoji = this.app.emojisCache.pick());
        }
        update() {
          if ((this.vel.add(this.app.forces.gravity), this.vel.add(this.acc), this.pos.add(this.vel), this.vel.y > 1)) {
            this.bursting = !0;
            const f = Math.floor(this.app.w / 4),
              e = this.rnd.chance(5) ? this.rnd.int(100, f) : this.rnd.int(20, 80);
            for (let f = 1; f < e; f++) this.bursts.push(new p(this.pos, this));
          }
        }
        draw() {
          const f = this.app.ctx;
          if (this.bursting) {
            const f = [];
            this.bursts.forEach((e) => {
              e.alive ? e.draw() : f.push(e);
            }),
              f.forEach((f) => {
                w(this.bursts, f);
              }),
              0 === this.bursts.length && (this.alive = !1);
          } else
            this.update(),
              f.save(),
              f.translate(this.pos.x, this.pos.y),
              f.scale(this.scale, this.scale),
              f.drawImage(this.emoji.canvas, 0, 0),
              f.restore();
        }
        constructor(f) {
          (this.app = f), (this.rnd = f.rnd), (this.bursts = []), this.reset();
        }
      }
      class p {
        update() {
          this.vel.add(this.app.forces.gravity), this.vel.add(this.acc), this.pos.add(this.vel);
        }
        draw() {
          const f = this.app.ctx;
          this.update(),
            f.save(),
            f.translate(this.pos.x, this.pos.y),
            f.rotate(this.rotate),
            f.scale(this.firework.scale / 2, this.firework.scale / 2),
            (f.globalAlpha = this.lifespan / this.lifespanStart),
            f.drawImage(this.firework.emoji.canvas, 0, 0),
            f.restore(),
            this.lifespan--,
            this.lifespan <= 0 && (this.alive = !1);
        }
        constructor(f, e) {
          (this.firework = e),
            (this.app = e.app),
            (this.pos = new (0, s.TinyVector)(f.x, f.y)),
            (this.rnd = e.rnd),
            (this.lifespan = this.rnd.int(5, 50)),
            (this.lifespanStart = this.lifespan),
            (this.vel = new (0, s.TinyVector)(this.rnd.real(-8, 8), this.rnd.real(-8, 8))),
            (this.acc = new (0, s.TinyVector)(0, 0)),
            (this.color = this.firework.color),
            (this.alive = !0),
            (this.rotate = this.rnd.real(0, 2 * Math.PI));
        }
      }
      const w = (f, e) => f.splice(f.indexOf(e), 1);
    }),
    n.register("lkeHE", function (f, e) {
      "use strict";
      /*!
       * Random JavaScript Library v1.6.1
       * Jeremy Zevin
       *
       * Released under the MIT license
       * http://opensource.org/licenses/MIT
       *npm
       * Date: 10/6/18
       *
       */ Object.defineProperty(f.exports, "__esModule", { value: !0 });
      var a = (function () {
        function f() {
          (this.native = Math.random), (this.uniq = this.unique);
        }
        return (
          (f.prototype.int = function (f, e) {
            return void 0 === f && (f = 0), void 0 === e && (e = 1), Math.floor(this.native() * (e - f + 1) + f);
          }),
          (f.prototype.real = function (f, e) {
            return void 0 === f && (f = 0), void 0 === e && (e = 1), this.native() * (e - f) + f;
          }),
          (f.prototype.pick = function (f) {
            return f[this.int(0, f.length - 1)];
          }),
          (f.prototype.chance = function (f) {
            return void 0 === f && (f = 10), f / 100 > this.native();
          }),
          (f.prototype.color = function (f) {
            if ((void 0 === f && (f = "rgb"), "hex" === f)) {
              for (var e = "#", a = 0; a <= 5; a++) e += this.pick([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]);
              return e;
            }
            return "rgba" === f
              ? "rgba(" + this.int(0, 255) + "," + this.int(0, 255) + "," + this.int(0, 255) + "," + this.native() + ")"
              : "hsl" === f
              ? "hsl(" + this.int(0, 360) + "," + this.int(0, 100) + "%," + this.int(0, 100) + "%)"
              : "hsla" === f
              ? "hsla(" + this.int(0, 360) + "," + this.int(0, 100) + "%," + this.int(0, 100) + "%," + this.native() + ")"
              : "rgb(" + this.int(0, 255) + "," + this.int(0, 255) + "," + this.int(0, 255) + ")";
          }),
          (f.prototype.unique = function (f, e) {
            if ((void 0 === e && (e = 0), e > f.length)) return !1;
            0 === e && (e = f.length);
            for (var a = []; a.length < e; ) {
              for (var i = this.pick(f), o = !1, n = 0; n < a.length; n++)
                if (a[n] == i) {
                  o = !0;
                  break;
                }
              o || a.push(i);
            }
            return a;
          }),
          f
        );
      })();
      f.exports.Random = a;
    }),
    n.register("lJSJc", function (f, e) {
      "use strict";
      /*!
       * tinyvector 2D JavaScript Lib
       * Jeremy Zevin
       *
       * Released under the MIT license
       * http://opensource.org/licenses/MIT
       */ Object.defineProperty(f.exports, "__esModule", { value: !0 });
      var a = (function () {
        function f(f, e) {
          void 0 === f && (f = 0), void 0 === e && (e = 0), (this.x = f), (this.y = e);
        }
        return (
          (f.prototype.add = function (f) {
            return (this.x += f.x), (this.y += f.y), this;
          }),
          (f.prototype.sub = function (f) {
            return (this.x -= f.x), (this.y -= f.y), this;
          }),
          (f.prototype.mult = function (f) {
            return (this.x *= f), (this.y *= f), this;
          }),
          (f.prototype.div = function (f) {
            return (this.x /= f), (this.y /= f), this;
          }),
          (f.prototype.mag = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
          }),
          (f.prototype.normalize = function () {
            var f = this.mag();
            return 0 !== f && this.div(f), this;
          }),
          (f.prototype.limit = function (f, e) {
            var a = f || null,
              i = e || null;
            return a && this.mag() > a && (this.normalize(), this.mult(a)), i && this.mag() < i && (this.normalize(), this.mult(i)), this;
          }),
          (f.prototype.zero = function () {
            return (this.x = 0), (this.y = 0), this;
          }),
          (f.prototype.copy = function () {
            return new f(this.x, this.y);
          }),
          (f.prototype.rotate = function (f) {
            var e = this.x * Math.cos(f) - this.y * Math.sin(f),
              a = this.x * Math.sin(f) + this.y * Math.cos(f);
            return (this.x = e), (this.y = a), this;
          }),
          (f.prototype.rotateDeg = function (f) {
            return this.rotate(this._degrees2radian(f));
          }),
          (f.prototype.heading = function () {
            return Math.atan2(this.y, this.x);
          }),
          (f.prototype.angleBetween = function (f) {
            var e = this.dot(f) / (this.mag() * f.mag());
            return Math.acos(Math.min(1, Math.max(-1, e)));
          }),
          (f.prototype.angleTo = function (f, e) {
            return void 0 === e && (e = 0), Math.atan2(f.y - this.y, f.x - this.x) + e;
          }),
          (f.prototype.dot = function (f) {
            return this.x * (f.x || 0) + this.y * (f.y || 0);
          }),
          (f.prototype.lerp = function (f, e) {
            return (this.x += (f.x - this.x) * e || 0), (this.y += (f.y - this.y) * e || 0), this;
          }),
          (f.prototype._radian2degrees = function (f) {
            return f * (180 / Math.PI);
          }),
          (f.prototype._degrees2radian = function (f) {
            return f / (180 / Math.PI);
          }),
          f
        );
      })();
      f.exports.TinyVector = a;
    }),
    n.register("6wFiT", function (f, a) {
      e(f.exports, "pickDensity", () => i);
      const i = (f, e) => (o() ? e : f),
        o = () => (window.devicePixelRatio || 1) > 1;
    });
})();
//# sourceMappingURL=welcome.0f0b38c0.js.map
