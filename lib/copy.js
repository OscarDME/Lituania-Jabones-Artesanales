// lib/copy.js — Visas matomas nukreipiamojo puslapio (landing page) turinys.
// Visi tekstų pakeitimai atliekami čia. Komponentai skaito tik iš šio objekto.

export const copy = {
  metadata: {
    title: "EcoHerbal — Kurk rankų darbo muilus, kurie parsiduoda patys",
    description:
      "EcoHerbal rankų darbo muilų ir natūralios kosmetikos kursas: išmok kurti natūralius muilus su daugiau nei 27 gidais, 500 receptų ir 8 NEMOKAMAIS bonusais. Prieiga visam gyvenimui su 80% nuolaida.",
    lang: "lt",
  },

  brand: {
    name: "EcoHerbal",
    tagline: "Natūralus grožis iš gamtos",
  },

  hero: {
    banner: "ŠIS PASIŪLYMAS + NEMOKAMI BONUSAI GALIOJA TIK:",
    timerLabels: { days: "Dienos", hours: "Val.", minutes: "Min.", seconds: "Sek." },
    kicker: "Jau daugiau nei 2 586 moterys kuria savo produktus",
    headlinePre: "KOSMETIKOS EKSPERTĖ ATSKLEIDŽIA,",
    headlineHighlight: "kaip sukurti neatsispiriamus muilus,",
    headlinePost: "kurie puoselėja tavo odą nuo pat pirmos dienos",
    supporting:
      "Idealiai tinka toms, kurios nori pradėti IŠKART ir susikurti realų pajamų šaltinį iš savo pačių gamintų natūralių muilų.",
    cta: "Noriu pradėti dabar 🧼",
    imageAlt: "Moteris su sveika ir švytinčia oda, naudodama EcoHerbal natūralią kosmetiką",
    trustChips: [
      { icon: "⭐", text: "Daugiau nei 2 586 mokinės" },
      { icon: "🎁", text: "8 NEMOKAMI bonusai" },
      { icon: "🛡️", text: "7 dienų garantija" },
    ],
  },

  instructorIntro: {
    quote:
      "Sukūriau šį išskirtinį kursą būtent tau – moteriai, kuri mėgsta kurti savo rankomis ir nori išmokti išties naudingo bei pelningo amato.",
  },

  soapCarousel: {
    items: [
      { image: "/carousel/soap-1.webp", alt: "Ką tik pagaminti rankų darbo muilai" },
      { image: "/carousel/soap-2.webp", alt: "Muilai su marmuro efektu" },
      { image: "/carousel/soap-3.webp", alt: "Muilas su dekoratyvine žalia banga" },
      { image: "/carousel/soap-4.webp", alt: "Natūralus levandų muilas" },
      { image: "/carousel/soap-5.webp", alt: "Įvairių rankų darbo muilų asortimentas" },
      { image: "/carousel/soap-6.webp", alt: "Dekoratyvinių muilų detalės" },
    ],
  },

  benefits: {
    headline:
      "...gali pradėti turėdama VISAI NEDIDELĮ BIUDŽETĄ ir mėgautis šiais PRIVALUMAIS!",
    items: [
      { icon: "Leaf", text: "Naudok natūralius ir tavo odai saugius ingredientus." },
      { icon: "ShieldCheck", text: "Pamiršk odos sausumą, sudirgimus ir alergijas." },
      { icon: "Sparkles", text: "Sukurk bet kokį muilą, kokį tik gali įsivaizduoti." },
      { icon: "TrendingUp", text: "Paversk savo mylimą hobį realiu pajamų šaltiniu." },
    ],
    checklist: [
      "Jokių nepavykusių receptų",
      "Nereikia būti eksperte",
      "Jokių griežtų grafikų ir streso",
    ],
    imageAlt: "Rankos, laikančios ką tik pagamintus rankų darbo muilus",
  },

  trending: {
    kicker: "2026 METŲ TENDENCIJA",
    headline:
      "vos per kelias dienas išmoksi sukurti madingus, akį traukiančius muilus, kurie parsiduos patys",
    imageAlt: "Madingo marmuro efekto rankų darbo muilai",
  },

  courseContent: {
    headline: "čia tave išmokysime visko",
    subheadline: "susipažink su visa programa",
    sectionLabel: "daugiau nei 27 el. knygose rasi...",
    paragraphs: [
      {
        bold: "Gauk visas reikiamas žinias,",
        rest: " kad galėtum kurti, gaminti ir laikyti natūralius muilus kaip tikra profesionalė.",
      },
      {
        bold: "Pamiršk bandymų ir klaidų metodą:",
        rest:
          " tiesiog sek aiškiu ir patikrintu gidu su praktiškais patarimais, kurie sutaupys tau ir laiko, ir nervų.",
      },
    ],
  },

  megapack: {
    kicker: "MEGA PAKETAS",
    headline: "į mega paketą įeina",
    items: [
      { bold: "Išsamus žingsnis po žingsnio gidas", rest: " nuo pradedančiosios iki profesionalės" },
      { bold: "500 receptų", rest: " kiekvienam odos tipui" },
      { bold: "Sukurk savo pačios", rest: " eterinius aliejus" },
      { bold: "Išmok gaminti", rest: " natūralų skystą muilą" },
    ],
    imageAlt: "EcoHerbal rankų darbo muilų mega paketo vizualizacija",
  },

  bonuses: {
    kicker: "NEMOKAMI BONUSAI",
    headline: "Jei prisijungsi šiandien, gausi 8 NEMOKAMUS bonusus!",
    subheadline: "27 parsisiunčiami gidai patogiu PDF formatu.",
    badge: "BONUSAS #",
    freeLabel: "NEMOKAMAI",
    items: [
      { image: "/bonuses/bonus-1.webp", title: "Kūno kosmetika", desc: "Natūralūs receptai visapusiškai kūno priežiūrai." },
      { image: "/bonuses/bonus-2.webp", title: "Veido kosmetika", desc: "Kremų, serumų ir tonikų receptai švytinčiai odai." },
      { image: "/bonuses/bonus-3.webp", title: "Natūralus dezodorantas", desc: "Švelnios, bet itin efektyvios formulės be chemijos." },
      { image: "/bonuses/bonus-4.webp", title: "Kietasis burnos skalavimo skystis", desc: "Pasirūpink savo dantų sveikata su natūraliais ingredientais." },
      { image: "/bonuses/bonus-5.webp", title: "Natūrali dantų pasta", desc: "Gilus valymas be jokių fluoridų ir sulfatų." },
      { image: "/bonuses/bonus-6.webp", title: "Vonios druskos", desc: "Atsipalaiduok su naminėmis aromatinėmis druskomis." },
      { image: "/bonuses/bonus-7.webp", title: "Kietasis šampūnas", desc: "Sveiki plaukai ir jokio plastiko pakuotėse." },
      { image: "/bonuses/bonus-8.webp", title: "Rankų darbo žvakės", desc: "Pilnas bonusinis kursas, kaip kurti dekoratyvines žvakes." },
    ],
    footer: "Visi bonusai suteikiami 100% skaitmeniniu formatu iškart po apmokėjimo.",
  },

  features: {
    headline: "Viskas, ką gausi prisijungusi",
    subheadline: "Pilna prieiga, parsisiunčiama medžiaga (PDF) ir sertifikatas.",
    items: [
      { icon: "Wifi", title: "100% internetu", desc: "Prisijunk prie pamokų kada tik nori ir iš bet kurios pasaulio vietos." },
      { icon: "FolderOpen", title: "Medžiaga Google diske", desc: "Viskas tvarkingai surūšiuota, kad mokytis būtų kuo paprasčiau." },
      { icon: "Infinity", title: "Prieiga visam gyvenimui", desc: "Mokykis savo tempu, jokių laiko apribojimų." },
      { icon: "BookOpen", title: "El. knygos lieka tau", desc: "Parsisiųsk jas arba skaityk internete be jokio streso." },
      { icon: "Award", title: "Dalyvavimo sertifikatas", desc: "Patvirtink savo naujas žinias oficialiu dokumentu." },
      { icon: "ShieldCheck", title: "7 dienų garantija", desc: "Jei nepatiks – grąžinsime 100% pinigų." },
    ],
  },

  primaryPricing: {
    discountBadge: "80% NUOLAIDA",
    valuedAtLabel: "Programos vertė",
    regularPrice: "39,50 €",
    offerPrice: "8,90 €",
    cta: "PASINAUDOTI NUOLAIDA",
    payInfo: "Vienkartinis mokėjimas ir prieiga visam gyvenimui",
    imageAlt: "EcoHerbal programos vizualizacija su išskirtine nuolaida",
    socialImageAlt: "Ekrano nuotraukos su realiomis patenkintų mokinių žinutėmis",
  },

  socialProof: {
    headline: "NEPRALEISK ŠIOS GALIMYBĖS!",
    subheadlinePre: "Jau daugiau nei",
    countHighlight: "2 586 moterys",
    subheadlinePost: "mėgaujasi savo pačių kurtais kosmetikos produktais!",
  },

  reviewScreenshots: {
    headline: "Realios mūsų mokinų žinutės",
    subheadline: "Štai ką kasdien gauname į WhatsApp.",
    onlineLabel: "prisijungęs",
    typingLabel: "rašo…",
    items: [
      {
        name: "Kotryna",
        timeLabel: "10:24",
        messages: [
          { text: "Padariau savo pirmus muilus pagal tavo gidą! 🌸" },
          { text: "Gavosi tiesiog nuostabūs, o oda tokia švelni ✨" },
          { text: "Kada įkelsi dar daugiau receptų?" },
        ],
      },
      {
        name: "Laura",
        timeLabel: "vakar",
        messages: [
          { text: "Šeštadienį mugėje pardaviau 12 muilų 😱" },
          { text: "Žmonės ėjo iš proto, negalėjau patikėti 🙌" },
          { text: "Ačiū už šį kursą, tikrai ❤️" },
        ],
      },
      {
        name: "Silvija",
        timeLabel: "12:05",
        messages: [
          { text: "Pradėjau prieš 2 savaites ir jau turiu savo prekių ženklą 💕" },
          { text: "Receptus sekti labai paprasta" },
          { text: "O tie NEMOKAMI bonusai tai išvis auksas 🎁" },
        ],
      },
      {
        name: "Vaida",
        timeLabel: "šiandien",
        messages: [
          { text: "Labas! Tiesiog norėjau pasidžiaugti, kad ką tik uždariau pardavimą" },
          { text: "10 muilų vienai ekologinei parduotuvėlei 🌿" },
          { text: "Tūkstantis ačiū, padarei mano dieną 🌷" },
        ],
      },
    ],
  },

  curriculum: {
    headline: "Kurso turinys",
    subheadline: "Išskleisk meniu ir pažiūrėk viską, ką gausi prisijungusi.",
    courses: [
      {
        title: "Kursas | Rankų darbo muilai",
        lessons: [
          "EcoHerbal muilai, 1 mod.",
          "EcoHerbal muilai, 2 mod.",
          "Muilų gamyba, 1 mod.",
          "Muilų gamyba, 2 mod.",
          "Bazinės technikos",
          "Ingredientai ir procesai",
          "Neįtikėtini ingredientai ir jų savybės",
        ],
      },
      {
        title: "Kursas | 500 muilų receptų",
        lessons: [
          "El. knyga (PDF) su 500 unikalių receptų.",
          "Ingredientų pritaikymo ir keitimo gidas.",
        ],
      },
      {
        title: "Kursas | Sukurk savo skystą muilą",
        lessons: [
          "Išsamus gidas žingsnis po žingsnio, kaip sukurti savo glicerininius skystus muilus.",
        ],
      },
      {
        title: "Kursas | Sukurk savo eterinius aliejus",
        lessons: [
          "Išsamus gidas žingsnis po žingsnio, kaip pasigaminti savo eterinius aliejus namuose.",
        ],
      },
      {
        title: "NEMOKAMAS BONUSAS | Rankų darbo žvakių kursas",
        lessons: [
          "Žvakių gamyba 1",
          "Žvakių gamyba 2",
          "Bičių vaško žvakės",
          "Sojų vaško žvakės",
          "Žvakių dekoravimas",
          "Rankų darbo žvakių gidas",
          "Ekstra: Lavos lempos",
        ],
      },
      {
        title: "NEMOKAMAS BONUSAS | Natūrali kosmetika",
        lessons: [
          "NEMOKAMAS BONUSAS Kūno kosmetika",
          "NEMOKAMAS BONUSAS Veido kosmetika",
          "NEMOKAMAS BONUSAS Dezodorantas",
          "NEMOKAMAS BONUSAS Kietasis burnos skalavimo skystis",
          "NEMOKAMAS BONUSAS Dantų pasta",
          "NEMOKAMAS BONUSAS Vonios druskos",
          "NEMOKAMAS BONUSAS Kietasis šampūnas",
        ],
      },
    ],
  },

  urgencyBanner: {
    discount: "80% NUOLAIDA",
    plus: "+ 8 NEMOKAMI bonusai",
    middle: "prie tavo pirkimo iki",
    deadline: "GRUODŽIO 14 D.",
    or: "arba kol užsipildys",
    slots: "26 VIETOS",
  },

  finalCta: {
    preHeadline: "TAVO LAIKAS YRA DABAR",
    urgencyTop: "80% NUOLAIDA",
    headline: "Griebk EcoHerbal mega paketą ŠIANDIEN su didžiule nuolaida",
    subUrgency:
      "Jau daugiau nei 2 586 moterys kuria savo pačių muilus ir kosmetiką. Šiandien – tavo eilė.",
    bundleList: [
      "Pilnas rankų darbo muilų kursas (4 moduliai)",
      "500 unikalių receptų kiekvienam odos tipui",
      "Skystų muilų gamybos kursas žingsnis po žingsnio",
      "Eterinių aliejų kursas",
      "BONUSAS — Pilnas rankų darbo žvakių kursas",
      "BONUSAS — 7 natūralios kosmetikos gidai",
      "Prieiga visam gyvenimui (PDF/internetu) + Dalyvavimo sertifikatas",
    ],
    guaranteeText:
      "Pilna 7 dienų garantija. Jei kursas nepatiks, grąžinsime 100% pinigų be jokių klausimų.",
    guaranteeImageAlt: "7 dienų garantijos antspaudas",
    regularPriceLabel: "Prieš tai",
    regularPrice: "39,50 €",
    offerPrice: "8,90 €",
    discountBadge: "80% NUOLAIDA",
    urgencyText: "Vienkartinis mokėjimas ir prieiga visam gyvenimui",
    bottomUrgency: "Šis pasiūlymas nustos galioti, kai laikmatis pasieks nulį.",
    button: "PASIIMTI MEGA PAKETĄ DABAR",
    trustRow: "100% saugus mokėjimas · Momentinė prieiga · 7 dienų garantija",
  },

  instructorBio: {
    name: "Elena Vasiliauskienė",
    title: "Natūralios kosmetikos ekspertė",
    bio: "Labas, aš Elena. Natūralia kosmetika ir muilų gamyba užsiimu jau daugiau nei 8 metus. Tai, kas prasidėjo nuo asmeninio poreikio prižiūrėti savo odą be lašelio chemijos, tapo mano didžiausia aistra... ir gyvenimo būdu. Per šiuos metus sukūriau dešimtis savo pačios formulių ir padėjau daugybei moterų, tokių kaip tu, žengti pirmuosius žingsnius šiame užburiančiame pasaulyje. Nuo pirmojo namų sąlygomis pagaminto muilo iki šio amato pavertimo pelningu ir tvariu verslu. Puikiai žinau, ką reiškia pradėti nuo nulio, neturint patirties, bijant suklysti ir nežinant, nuo ko pradėti. Būtent todėl šiame kurse dalinuosi viskuo, ką išmokau pati – aiškiai, praktiškai ir be jokių bereikalingų komplikacijų.",
    imageAlt: "Elena Vasiliauskienė, natūralios kosmetikos ir rankų darbo muilų ekspertė",
    portfolioImages: [
      "/instructor-portfolio/work-1.webp",
      "/instructor-portfolio/work-2.webp",
      "/instructor-portfolio/work-3.webp",
    ],
    portfolioAlts: [
      "Elenos sukurti rankų darbo muilai",
      "Darbas natūralios kosmetikos dirbtuvėse",
      "Paruošti produktai, laukiantys pardavimo",
    ],
    yearsLabel: "Daugiau nei 8 metai",
    yearsText: "natūralios kosmetikos kūrimo",
    studentsLabel: "Virš 2 586",
    studentsText: "apmokytų mokinų",
  },

  testimonials: {
    headline: "Be to, galėsi atsiimti savo sertifikatą",
    subheadline: "Pažiūrėk, ką sako tos, kurios jau praėjo EcoHerbal kursą.",
    productLabel: "EcoHerbal — Rankų darbo muilų kursas",
    reviewedLabel: "parašė atsiliepimą apie",
    actions: { like: "Patinka", comment: "Komentuoti", share: "Dalintis" },
    items: [
      {
        name: "Ugnė Petrauskaitė",
        handle: "@ugne_p",
        text: "Kursas man be galo patiko. Viską dariau tiksliai taip, kaip mokė dėstytoja, ir greičiau nei per mėnesį sugebėjau pradėti savo verslą bei padaryti pirmuosius pardavimus. Dabar gaminu vis daugiau muilų ir netgi galvoju atidaryti savo parduotuvėlę. Ačiū už šį kursą, tikrai verta.",
      },
      {
        name: "Milda Kazlauskienė",
        handle: "",
        text: "Prieš savaitę baigiau kursą ir esu sužavėta. Jau pagaminau savo pirmuosius muilus, išbandėme juos namuose ir visi esame nustebinti rezultato. Dabar ruošiuosi pradėti juos pardavinėti, lygiai taip, kaip mus mokė kurse. Keli draugų draugai jau nori iš manęs pirkti. Labai ačiū už šią galimybę. Verta kiekvieno cento.",
      },
      {
        name: "Rasa Juknevičienė",
        handle: "",
        text: "Palieku šį komentarą, nes kursą praėjau jau prieš kurį laiką ir iškart po jo pradėjau vystyti verslą. Atvirai sakant, viskas sekasi labai gerai, o vakar netgi pasirašiau sutartį su vienu prekės ženklu, kad jie pradėtų pardavinėti kelis mano produktus. Niekada negalvojau, kad prieisime iki to, todėl TARIU DIDELĮ AČIŪ. Šis kursas yra be proto gera investicija.",
      },
      {
        name: "Tomas Jankauskas",
        handle: "@tomas_j",
        text: "Puikus turinys, labai aiškiai ir profesionaliai pateiktas. Dovanų pridedami bonusai... jeigu turite progą juos gauti, būtinai imkit. Labai vertinga informacija. Sėkmės ir didelis ačiū, kad dalinatės šiomis žiniomis, kurios padeda pradėti verslą.",
      },
    ],
    cta: "NORIU PRADĖTI ŠIANDIEN",
  },

  closingProof: {
    headlinePre: "Mūsų mokiniai sukuria pirmuosius produktus greičiau nei per",
    headlineHighlight: "3 dienas",
    headlinePost: ". Ko tu dar lauki?",
    ctaLabel: "PRADĖK ŠIANDIEN",
  },

  guarantee: {
    badgeLabel: "7 DIENŲ GARANTIJA",
    headline: "NESIJAUDINK, MES PRISIIMAME VISĄ RIZIKĄ UŽ TAVE.",
    text: "Turėsi visą savaitę išbandyti kursą, ir jei jis tau nepatiks arba nepateisins tavo lūkesčių, mes tau grąžinsime 100% pinigų.",
    badgeAlt: "EcoHerbal 7 dienų garantijos antspaudas",
    certs: [
      { icon: "Award", label: "Oficialus sertifikatas" },
      { icon: "ShieldCheck", label: "100% saugus mokėjimas" },
      { icon: "Lock", label: "Duomenys apsaugoti" },
      { icon: "BadgeCheck", label: "Patikrinta kokybė" },
    ],
  },

  faq: {
    headline: "Dažniausiai užduodami klausimai",
    subheadline: "Viskas, ką turi žinoti prieš pradedant.",
    items: [
      {
        q: "Ar mokėti saugu?",
        a: "Taip, mokėjimai vykdomi per Hotmart – vieną saugiausių ir žinomiausių skaitmeninių platformų pasaulyje, kuri veikia daugiau nei 160 šalių ir naudoja naujausios kartos saugumo sertifikatus. Tavo mokėjimo duomenys bus visiškai apsaugoti ir 100% konfidencialūs, todėl pirkimas yra visiškai saugus.",
      },
      {
        q: "Ar galiu praeiti kursą, jei neturiu jokios patirties?",
        a: "Žinoma! Visos el. knygos yra labai išsamios, tad realiai viskas, ko tau reikia – tai noras mokytis. Visas procesas labai aiškus ir paprastas, naudosime labai praktiškus įrankius.",
      },
      {
        q: "Ar galiu pasiekti kursą iš bet kokio įrenginio?",
        a: "Taip, kursą gali pasiekti iš bet kurio įrenginio! Nesvarbu, ar naudosi kompiuterį, planšetę ar mobilųjį telefoną, galėsi mėgautis turiniu su bet kokia operacine sistema – Windows, macOS, iOS ar Android. Be to, gali atsisiųsti Hotmart programėlę, kad būtų dar patogiau mokytis per telefoną.",
      },
      {
        q: "Ar pradėti gaminti muilus brangu?",
        a: "Ne! Natūrali kosmetika reikalauja labai mažų pradinių investicijų. Mes mokome naudoti prieinamas medžiagas, kad galėtum pradėti be jokių didelių išlaidų.",
      },
      {
        q: "Kada prasideda kursas?",
        a: "Iškart po pirkimo gausi prisijungimo nuorodą (ir PDF knygas), su kuria iš karto galėsi patekti į platformą ir mokytis tada, kai tau patogu. Prieiga lieka tavo visam gyvenimui.",
      },
      {
        q: "Kas įeina į kursą?",
        a: "Į kursą įeina prieiga visam gyvenimui, žingsnis po žingsnio el. knygos, parsisiunčiama medžiaga (PDF), techninė pagalba ir sertifikatas baigus kursą.",
      },
      {
        q: "Ar išduodate sertifikatą?",
        a: "Žinoma, kai baigsi kursą, tiesiog parašyk mums el. laišką ir mes tau atsiųsime sertifikatą.",
      },
    ],
  },

  footer: {
    brand: "CREARIS",
    copyright: "Copyright © crearis.online ® 2026",
    disclaimer:
      "Ši svetainė nėra Facebook ar Facebook Inc. dalis. Taip pat ši svetainė NĖRA jokiu būdu remiama ar patvirtinta Facebook.",
    trademark: "FACEBOOK yra registruotasis FACEBOOK, Inc. prekės ženklas.",
  },
};