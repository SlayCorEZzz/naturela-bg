// Imported once from naturela-bg.com (September 2026).
// From here on this file is the source of truth for the site — edit it directly.

export type Lang = "bg" | "en";
export type L<T> = Record<Lang, T>;

export interface DocLink {
  href: string;
  label: string;
  ext: string;
}

export interface Product {
  id: string;
  slug: string;
  card: string | null;
  related: string[];
  model: string;
  cat: L<string>;
  title: L<string>;
  excerpt: L<string>;
  gallery: L<string[]>;
  docs: L<DocLink[]>;
}

export interface Category {
  key: string;
  icon: string;
  slug: L<string>;
  title: L<string>;
  products: string[];
}

export const products: Product[] = [
  {
    id: "58",
    slug: "58-0-newhc1-kontroler-za-trifazen-elektrieski-kotel",
    card: "/media/newhc-1-kit-00260-19e7ec.jpg",
    related: [],
    cat: {
      bg: "elektronni-termoregulatori-za-bitovi-otoplitelni-uredi",
      en: "digital-electronic-controllers-for-household-heating-appliances",
    },
    title: {
      bg: "NEWHC1 - Контролер за трифазен електрически котел",
      en: "NEWHC1 - Controller for three-phase electrical boiler",
    },
    excerpt: {
      bg: "NEWHC1 е контролер, управляващ двукръгов трифазен електрически котел. Двата кръга могат да бъдат за отопление + БГВ с по един трифазен електрически нагревател или да работят само за…",
      en: "NEWHC1 is a controller manages 2 circuits 3 phase electrical boiler. The two circuits can be for heating and DHW with one 3 phase electrical heater еach. The controller consists of the next…",
    },
    gallery: {
      bg: [
        "/media/newhc1-3-2-wiring-diagram-rev-2-00259-0bf64a.jpg",
        "/media/newhc-1-kit-00260-19e7ec.jpg",
      ],
      en: [
        "/media/newhc-1-kit-00260-19e7ec.jpg",
        "/media/newhc1-3-2-wiring-diagram-rev-2-00259-0bf64a.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NELBC_rev1_2_BG.pdf",
          label: "Ръководство за работа с контролер за електрически котел NEWHC",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NEWHC1",
  },
  {
    id: "57",
    slug: "57-0-nhc-57-termoregulator-za-inteligenten-elektrieski-boiler",
    card: "/media/nhc-57-rend1l-00255-6e252d.jpg",
    related: [],
    cat: {
      bg: "elektronni-termoregulatori",
      en: "digital-electronic-controllers-for-water-heaters",
    },
    title: {
      bg: "NHC-57W Терморегулатор за интелигентен електрически бойлер",
      en: "NHC-57 W- Controller for Smart electric water heater",
    },
    excerpt: {
      bg: "NHC-57W е от следващото поколение контролери, на които традиционните бутони са заменени със сензорни. Предназначението му е да управлява загряването на водата в бойлер само с електрически…",
      en: "NHC-57W is the next generation of controllers whose traditional buttons have been replaced with new sensor touch buttons. It controls the heating of the water in the boiler only with an…",
    },
    gallery: {
      bg: [
        "/media/nhc-57-rend1l-00255-6e252d.jpg",
        "/media/nhc-57-p2l-00256-66cf7e.jpg",
        "/media/2021-12-14-16-bit-00257-0f6126.jpg",
      ],
      en: [
        "/media/nhc-57-rend1l-00255-6e252d.jpg",
        "/media/nhc-57-p2l-00256-66cf7e.jpg",
        "/media/2021-12-14-16-bit-00257-0f6126.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NSH_A14_BG.pdf",
          label: "Заобикаляне на проблем при свързване към Интернет чрез телефон с Android 14",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NHC-56_WiFiCnf_v1_0a.pdf",
          label: "Нов метод за свързване на WiFi модула към Интернет",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-57W",
  },
  {
    id: "56",
    slug: "56-0-npbc-v6t-noviyat-kontroler-za-peletni-gorelki-s-35-touch-displei",
    card: "/media/nrc-8-4-v-2-black-00247-400be2.jpg",
    related: ["51", "58"],
    cat: {
      bg: "elektronni-kontroleri-za-peletni-gorelki-i-kotli",
      en: "electronic-controllers-for-pellet-burner-bojler",
    },
    title: {
      bg: "NPBC-V6T Новият контролер за пелетни горелки с touch дисплей",
      en: "NPBC-V6T – The new pellet burner controller with touch display",
    },
    excerpt: {
      bg: "Новият контролер NPBC-V6T има възможност да управлява голямо разнообразие от пелетни съоръжения, като пелетни горелки, котли, камини фурни и др. Той е разработен с възможност да бъде…",
      en: "The new NPBC-V6T controller can control a great variety of pellet units, as pellet burners, boilers, stoves, ovens and others. It has been developed with a possibility to be adjusted in a…",
    },
    gallery: {
      bg: [
        "/media/nrc-8-4-v-2-black-00247-400be2.jpg",
        "/media/nrc8-real-black-white-00249-19f7ae.jpg",
        "/media/npbc-v6t-1-1-00250-d9fdde.jpg",
        "/media/nrc8inside-00252-04a67b.jpg",
      ],
      en: [
        "/media/nrc-8-4-v-2-black-00247-400be2.jpg",
        "/media/npbc-v6t-1-1-00250-d9fdde.jpg",
        "/media/nrc8-real-black-white-00249-19f7ae.jpg",
        "/media/nrc8inside-00252-04a67b.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NPBC-V6T-1_rev1_1_BG.pdf",
          label: "Ръководство за работа с контролер за пелетна горелка",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NPBC-V6T-2_rev1_1_BG.pdf",
          label: "Ръководство за работа с контролер за пелетна камина с водна риза NPBC-V6T-2",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NRC8-SV_rev1_1_BG.pdf",
          label: "Стаен термостат и изнесен контролен модул NRC8-SV",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NPBC-V6T_TM_1_1_BG_draft.pdf",
          label: "Техническа информация за контролер за пелетна горелка NPBC-V6T",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/Nat_Smarthome_BG.pdf",
          label:
            "Системата за дистанционен мониторинг и управление през Интернет - Naturela Smart Home",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NSH_V6T_UM_BG.pdf",
          label: "Управление на NPBC-V6T през Naturela Smart Home",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NPBC-V6T",
  },
  {
    id: "55",
    slug: "55-0-nhc-562-termoregulator-za-inteligenten-elektrieski-boiler-s-dva-vodosydyrjatelya",
    card: "/media/flatwh-nhc-562m2-00246-9d5956.jpg",
    related: [],
    cat: {
      bg: "elektronni-termoregulatori",
      en: "digital-electronic-controllers-for-water-heaters",
    },
    title: {
      bg: "NHC-562 - Терморегулатор за интелигентен електрически бойлер с два водосъдържателя",
      en: "NHC-562 - Controller for smart electric water heater with two tanks",
    },
    excerpt: {
      bg: "NHC-562/NHC-562W са терморегулатори, предназначни за вграждане в новите модерни плоски електрически бойлери, имащи два последователно свързани водосъдържателя. Те управлява два електрически…",
      en: "NHC-562 is a thermoregulator, designed to be installed into the new modern flat electric water heaters with two water tanks in series. It controls two electric heaters and two thermosensors…",
    },
    gallery: {
      bg: [
        "/media/flatwh-nhc-562m2-00246-9d5956.jpg",
        "/media/nhc-562-f1-00244-d57e10.jpg",
        "/media/nhc-562-r1-00245-b08315.jpg",
        "/media/nhc-562w-p1-00253-b1077d.jpg",
      ],
      en: [
        "/media/nhc-562-f1-00244-d57e10.jpg",
        "/media/nhc-562-r1-00245-b08315.jpg",
        "/media/flatwh-nhc-562m2-00246-9d5956.jpg",
        "/media/nhc-562w-p1-00253-b1077d.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NHC-562_RM_v1_1(1).pdf",
          label: "Ръководство за работа с електронен терморегулатор NHC-562",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NSH_A14_BG.pdf",
          label: "Заобикаляне на проблем при свързване към Интернет чрез телефон с Android 14",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-562",
  },
  {
    id: "54",
    slug: "54-0-nhpc-v4-kontroler-za-split-sistema-termopompen-boiler-s-upravlyaem-razshiritelen-ventil",
    card: "/media/nhpc-v4-kit1-00238-82d04e.jpg",
    related: ["49", "50"],
    cat: {
      bg: "elektronni-termoregulatori",
      en: "digital-electronic-controllers-for-water-heaters",
    },
    title: {
      bg: "NHPC-V4 - Контролер за Split система термопомпен бойлер, с управляем разширителен вентил",
      en: "NHPC-V4 – Controller for Heat Pump with electronic expansion valve control",
    },
    excerpt: {
      bg: "NHPC-V4 е нов контролер, предназначен за вграждане в split система термопомпени бойлери тип въздух-вода. Контролерът е съставен от два модула: NHPC-PM-V3.2 за вграждане във външното тяло на…",
      en: 'NHPC-V4 is a controller with a new, more elegant 2,4" color display, designed to be installed in Split air to water Heat Pumps water heaters. The controller consists of 2 modules, as…',
    },
    gallery: {
      bg: [
        "/media/nhpc-v4-kit1-00238-82d04e.jpg",
        "/media/lepenka-main-solar-00239-96b918.jpg",
        "/media/nhc-h53-rf-00240-1343b0.jpg",
      ],
      en: [
        "/media/nhc-h53-rf-00240-1343b0.jpg",
        "/media/nhpc-v4-kit1-00238-82d04e.jpg",
        "/media/lepenka-main-solar-00239-96b918.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NHPC-V4_RM_v1_1_BG.pdf",
          label: "Ръководство за работа с контролер за термопомпа NHPC-V4",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHPC-V4",
  },
  {
    id: "53",
    slug: "53-0-nhc-56-termoregulator-za-elektrieski-boiler-s-funkciya-smart-control",
    card: "/media/d73510511565d469fcb027616e63e56c6a2f11e14fd0fp-7a6e61.jpg",
    related: [],
    cat: {
      bg: "elektronni-termoregulatori",
      en: "digital-electronic-controllers-for-water-heaters",
    },
    title: {
      bg: "NHC-56M Терморегулатор за интелигентен електрически бойлер с цветен TFT дисплей",
      en: "NHC-56M - Controller for intelligent electric water heater",
    },
    excerpt: {
      bg: "NHC-56M е нов интелигентен терморегулатор за електрически бойлери. Той се управлява от последно поколение самообучаващи се алгоритми за автоматично спестяване на разходите за…",
      en: "NHC-56M is a new modern and intelligent thermoregulator for electrical water heaters. It has a latest generation of self-learning algorithms for automatic saving of electricity costs,…",
    },
    gallery: {
      bg: ["/media/d73510511565d469fcb027616e63e56c6a2f11e14fd0fp-7a6e61.jpg"],
      en: ["/media/d73510511565d469fcb027616e63e56c6a2f11e14fd0fp-7a6e61.jpg"],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NHC-56_RM_v1_1.pdf",
          label: "Ръководство за работа с електронен терморегулатор NHC-56M",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/Nat_Smarthome_BG.pdf",
          label:
            "Системата за дистанционен мониторинг и управление през Интернет - Naturela Smart Home",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NSH_NHC56_UM_BG.pdf",
          label: "Управление на NHC-56 през Naturela Smart Home",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NSH_A14_BG.pdf",
          label: "Заобикаляне на проблем при свързване към Интернет чрез телефон с Android 14",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NHC-56_WiFiCnf_v1_0a.pdf",
          label: "Нов метод за свързване към Интернет във версия на софтуера над 48",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-56M",
  },
  {
    id: "52",
    slug: "52-0-nhc-pc5-elektronen-termoregulator-s-tft-displei-za-elektrieski-panelen-konvektor",
    card: "/media/pc5-w-00242-a00e64.jpg",
    related: [],
    cat: {
      bg: "elektronni-termoregulatori-za-bitovi-otoplitelni-uredi",
      en: "digital-electronic-controllers-for-household-heating-appliances",
    },
    title: {
      bg: "NHC-PC5 Електронен терморегулатор с цветен TFT дисплей за електрически панелни конвектори",
      en: "NHC-PC5 - Electronic Temperature Regulators with color display for electric panel convector",
    },
    excerpt: {
      bg: 'NHC-PC5 е нов електронен терморегулатор за електрически панелен конвектор от моделната гама CW-xxxx, произвеждани от „Елдоминвест“. Терморегулаторът е с модерен 1.8" TFT дисплей, върху…',
      en: "NHC-PC5 is a new electronic temperature regulator designed for built in an electric panel convector CW-xxxx type, produced by Eldominvest. The temperature regulator has a modern 1.8 '' TFT…",
    },
    gallery: {
      bg: [
        "/media/rhxxn-00241-74e0a5.jpg",
        "/media/pc5-w-00242-a00e64.jpg",
        "/media/rh01xxn-00254-0c9f90.jpg",
      ],
      en: [
        "/media/rhxxn-00241-74e0a5.jpg",
        "/media/pc5-w-00242-a00e64.jpg",
        "/media/rh01xxn-00254-0c9f90.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NHC-PC5_RM_v1_0(1).pdf",
          label: "Ръководство за експлоатация на електронен терморегулатор NHC-PC5",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/Eldom_Smarthome_BG.pdf",
          label:
            "Системата за дистанционен мониторинг и управление през Интернет: MyEldom - ръководство за свързване",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NSH_A14_BG.pdf",
          label: "Заобикаляне на проблем при свързване към Интернет чрез телефон с Android 14",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-PC5",
  },
  {
    id: "51",
    slug: "51-0-npbc-v3c-elektronen-kontroler-za-peletni-gorelki-s-cveten-displei",
    card: "/media/2db3710d7c94ec71b80ad707f8c034ff0npbc-v4-1-kit-aa48e2.jpg",
    related: ["56"],
    cat: {
      bg: "elektronni-kontroleri-za-peletni-gorelki-i-kotli",
      en: "electronic-controllers-for-pellet-burner-bojler",
    },
    title: {
      bg: "NPBC-V4E - Електронен контролер за пелетни горелки с цветен дисплей",
      en: "NPBC-V4E / NPBC-V4C / NPBC-V3C – Electronic pellet burner controller with color display",
    },
    excerpt: {
      bg: "Контролерите NPBC-V4E са съставени от изпълнителен модул NPBC-V4E и новият контролен модул NRC7 с 2.4“ IPS дисплей, управляван чрез 6 бутона. Новият дисплей е с по-ярки цветове и видимостта…",
      en: "The controller NPBC-V3C works with NPBC-V3M Executive module and NRC-6 – new, elegant and smart Control module with 2.4'' TFT color display. In october 2017 has been started a production of…",
    },
    gallery: {
      bg: [
        "/media/115606b018b33861d8067300c858784779860nrc-6-fp2-3c9521.jpg",
        "/media/5115606b018b33861d8067300c858784779861nrc-6-b1-13a12a.jpg",
        "/media/051156034bb035f398fbbaa8c791f583d9fb970nsh-ms1-dcb2b5.jpg",
        "/media/34bb035f398fbbaa8c791f583d9fb971npbc-v3c-1-kit-c6c216.jpg",
        "/media/6034bb035f398fbbaa8c791f583d9fb972nrc6-b-w-box-d0d326.jpg",
        "/media/2db3710d7c94ec71b80ad707f8c034ff0npbc-v4-1-kit-aa48e2.jpg",
      ],
      en: [
        "/media/115606b018b33861d8067300c858784779860nrc-6-fp2-3c9521.jpg",
        "/media/5115606b018b33861d8067300c858784779861nrc-6-b1-13a12a.jpg",
        "/media/051156034bb035f398fbbaa8c791f583d9fb970nsh-ms1-dcb2b5.jpg",
        "/media/34bb035f398fbbaa8c791f583d9fb971npbc-v3c-1-kit-c6c216.jpg",
        "/media/6034bb035f398fbbaa8c791f583d9fb972nrc6-b-w-box-d0d326.jpg",
        "/media/2db3710d7c94ec71b80ad707f8c034ff0npbc-v4-1-kit-aa48e2.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NPBC-V3C-1_rev3_0_BG.pdf",
          label:
            "Ръководство за работа с контролер за пелетна горелка NPBC-V3C-1 / NPBC-V4C-1 / NPBC-V4E-1",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NPBC-V3C-2_rev3_1_BG.pdf",
          label: "Ръководство за работа с контролер за пелетна камина с водна риза NPBC-V4C-2",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NPBC-V3C-B_rev3_1_BG.pdf",
          label: "Ръководство за работа с контролер за пелетна фурна NPBC-V4C-B",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NPBC-V4C-K_rev3_8_BG.pdf",
          label: "Ръководство за работа с контролер за суха камина NPBC-V4C-K",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NRC6_SV_rev3_1_BG.pdf",
          label: "Ръководство за работа със стаен термостат и изнесен контролен модул NRC6-SV",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/Nat_Smarthome_BG.pdf",
          label:
            "Системата за дистанционен мониторинг и управление през Интернет - Naturela Smart Home",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NSH_V3C_UM_1_BG.pdf",
          label: "Управление на NPBC-V4C/NPBC-V4E през Naturela Smart Home",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NRC6_WiFiCnf_v1_0_bg.pdf",
          label: "Нов метод за свързване на WiFi модула към Интернет",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NPBC-V4E",
  },
  {
    id: "50",
    slug: "50-nhc-h52-1-termoregulator-za-boiler-sys-solarna-instalaciya",
    card: "/media/156a22e01c186ed24539b100948b57c5dcc0nhc-h52-1m-784f94.jpg",
    related: ["12", "49", "53"],
    cat: {
      bg: "elektronni-termoregulatori",
      en: "digital-electronic-controllers-for-water-heaters",
    },
    title: {
      bg: "NHC-H52-1S/NHC-H52M-1S – Контролер за комбиниран бойлер със соларна инсталация",
      en: "NHC-H52-1 - Controller for water heaters with a solar collector",
    },
    excerpt: {
      bg: "NHC-H52(M)-1S е контролер, предназначен за вграждане в комбинирани бойлери с електрически нагревател и слънчев колектор. Директно към контролерът се включват монофазен или трифазен…",
      en: "NHC -H5 2-1S is a new smarter electronic temperature regulator, designed to be installed in combined water heaters with an electrical heating element and a solar collector. Thanks to its…",
    },
    gallery: {
      bg: [
        "/media/156a22e01c186ed24539b100948b57c5dcc0nhc-h52-1m-784f94.jpg",
        "/media/1156949d28adb8799eda7feab4e1acc1fb7a1nhc-h52-6-d8d883.jpg",
        "/media/a5afa02c1beebeb088f71c56c4f0f02hs-screen-shot1-980e86.jpg",
        "/media/1156ec000947206bbe1543c83e5d8aff57bd0screen-s1-0f0430.jpg",
        "/media/1156168d1df9ac9aac61e0cd3484eee81b781screen-s5-994982.jpg",
      ],
      en: [
        "/media/156a22e01c186ed24539b100948b57c5dcc0nhc-h52-1m-784f94.jpg",
        "/media/1156949d28adb8799eda7feab4e1acc1fb7a1nhc-h52-6-d8d883.jpg",
        "/media/a5afa02c1beebeb088f71c56c4f0f02hs-screen-shot1-980e86.jpg",
        "/media/1156ec000947206bbe1543c83e5d8aff57bd0screen-s1-0f0430.jpg",
        "/media/1156168d1df9ac9aac61e0cd3484eee81b781screen-s5-994982.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/H52-1_RM_v2_1_BG.pdf",
          label: "Инструкция за ползване на комбиниран електронен терморегулатор NHC-H52-1",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/Nat_Smarthome_BG.pdf",
          label:
            "Системата за дистанционен мониторинг и управление през Интернет - Naturela Smart Home",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NSH_H52_UM_BG.pdf",
          label: "Управление на NHC-H52 през Naturela Smart Home",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-H52-1S/NHC-H52M-1S",
  },
  {
    id: "49",
    slug: "49-0-nhc-h52-termoregulator-za-kombiniran-elektrieski-boiler-sys-solarna-instalaciya-i-kotel",
    card: "/media/156bb9603c8c31eb4bb55e9b9766010a5160nhc-h52-3m-64d7b8.jpg",
    related: ["12", "50", "53"],
    cat: {
      bg: "elektronni-termoregulatori",
      en: "digital-electronic-controllers-for-water-heaters",
    },
    title: {
      bg: "NHC-H52-2/NHC-H52M-2 – Контролер за комбинирани електрически бойлер със соларна инсталация и котел",
      en: "NHC-H52-2 - Controller for combined electric water heaters with a solar collector and a boiler",
    },
    excerpt: {
      bg: "NHC-H52(M)-2 е нов, по-красив и по-умен контролер, предназначен за вграждане в комбинирани бойлери с електрически нагревател, слънчев колектор и котел. Директно към терморегулаторa се…",
      en: "NHC -H5 2-2 is a new, better looking and smarter electronic temperature regulator, designed to be installed in combined water heaters with an electrical heating element, a solar collector…",
    },
    gallery: {
      bg: [
        "/media/11564299333a27805097b8481c1e87e81a290nhc-h54-1-29c824.jpg",
        "/media/156bb9603c8c31eb4bb55e9b9766010a5160nhc-h52-3m-64d7b8.jpg",
        "/media/11564299333a27805097b8481c1e87e81a291nhc-h54-2-73cce2.jpg",
        "/media/9f358ac18956f8d17a472a5f2b5793a0sticker-screen-27fe84.jpg",
        "/media/h-52-w3-2-00237-35b98d.jpg",
        "/media/1156766652a57fe28331389a3eac1fcadda40nhc-h52-5-3f71e6.jpg",
        "/media/1156af68c3fe3b66475160d04672c5eaeba61screen-s2-fc8003.jpg",
        "/media/1156af68c3fe3b66475160d04672c5eaeba62screen-s3-f632f1.jpg",
        "/media/1156af68c3fe3b66475160d04672c5eaeba63screen-s4-6f6019.jpg",
      ],
      en: [
        "/media/11564299333a27805097b8481c1e87e81a290nhc-h54-1-29c824.jpg",
        "/media/156bb9603c8c31eb4bb55e9b9766010a5160nhc-h52-3m-64d7b8.jpg",
        "/media/11564299333a27805097b8481c1e87e81a291nhc-h54-2-73cce2.jpg",
        "/media/9f358ac18956f8d17a472a5f2b5793a0sticker-screen-27fe84.jpg",
        "/media/h-52-w3-2-00237-35b98d.jpg",
        "/media/1156766652a57fe28331389a3eac1fcadda40nhc-h52-5-3f71e6.jpg",
        "/media/1156af68c3fe3b66475160d04672c5eaeba61screen-s2-fc8003.jpg",
        "/media/1156af68c3fe3b66475160d04672c5eaeba62screen-s3-f632f1.jpg",
        "/media/1156af68c3fe3b66475160d04672c5eaeba63screen-s4-6f6019.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/H52_RM_v2_4_BGm.pdf",
          label: "Инструкция за ползване на комбиниран електронен терморегулатор NHC-H52-2",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/H54_RM_v2_1_BGn.pdf",
          label: "Инструкция за работа с комбиниран електронен терморегулатор NHC-H52M-2",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/Nat_Smarthome_BG.pdf",
          label:
            "Системата за дистанционен мониторинг и управление през Интернет - Naturela Smart Home",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NSH_H52_UM_BG.pdf",
          label: "Управление на NHC-H52 през Naturela Smart Home",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-H52-2/NHC-H52M-2",
  },
  {
    id: "48",
    slug: "48-0-nhc-pc3e-elektronen-termoregulator-za-panelen-konvektor",
    card: "/media/156b333408f940ffff20ddc01da7eb1e31b0nhc-pc3e-5-f0d0cb.jpg",
    related: ["52"],
    cat: {
      bg: "elektronni-termoregulatori-za-bitovi-otoplitelni-uredi",
      en: "digital-electronic-controllers-for-household-heating-appliances",
    },
    title: {
      bg: "NHC-PC3E - Електронен терморегулатор за панелен конвектор",
      en: "NHC-PC3E - Electronic Temperature Regulators for electric panel convector",
    },
    excerpt: {
      bg: "NHC- PC3E е електронен терморегулатор, предназначен за вграждане в електрически панелни конвектори, модели CW-xxxx, произвеждани от „Елдоминвест“. Терморегулаторът се управлява от бърз…",
      en: "NHC-PC3E is an electronic temperature regulator, designed for the electrical panel convectors model CW-xxxx, produced by Eldominvest. It is controlled by a fast microprocessor with reliable…",
    },
    gallery: {
      bg: [
        "/media/156b333408f940ffff20ddc01da7eb1e31b0nhc-pc3e-5-f0d0cb.jpg",
        "/media/156efb0d4f0c04b02efb67d5930784891a11nhc-pc3e-4-d72516.jpg",
      ],
      en: [
        "/media/156b333408f940ffff20ddc01da7eb1e31b0nhc-pc3e-5-f0d0cb.jpg",
        "/media/156efb0d4f0c04b02efb67d5930784891a11nhc-pc3e-4-d72516.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NHC-PC3_RM_v3_1.pdf",
          label: "NHC-PC3_RM_v3_1.pdf",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-PC3E",
  },
  {
    id: "47",
    slug: "47-0-npbc-v5-universalen-kontroler-za-upravlenie-na-visok-klas-peletni-gorelki-i-kotli",
    card: "/media/1568e2026809d8aa3c19503354e52ee2e3b0npbc-v5m-3-24f121.jpg",
    related: [],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "NPBC-V5 – Контролер за управление на висок клас пелетни котли или пелетни горелки",
      en: "NPBC-V5 - A high class pellet boiler and burner controller",
    },
    excerpt: {
      bg: "Контролерът NPBC-V 5 е предназначен за работа с висок клас пелетни котли, имащи нужда от по-голям набор сензори и изпълнителни механизми. Той разполага с 18 входа, един от които е за…",
      en: "The controller NPBC-V5 is designed to run high class pellet boilers which use more sensors and mechanisms. It has 18 inputs and 20 outputs. One of the inputs is for a lambda sensor and two…",
    },
    gallery: {
      bg: [
        "/media/156523a6c5434fd29711426509f988239270npbc-v5m-2-ae696b.jpg",
        "/media/1568e2026809d8aa3c19503354e52ee2e3b0npbc-v5m-3-24f121.jpg",
        "/media/6e0bd6a41e6283ac1c4f8edd0b6d866ee0npbc-v5m-dim-a58fdd.jpg",
      ],
      en: [
        "/media/156523a6c5434fd29711426509f988239270npbc-v5m-2-ae696b.jpg",
        "/media/1568e2026809d8aa3c19503354e52ee2e3b0npbc-v5m-3-24f121.jpg",
        "/media/6e0bd6a41e6283ac1c4f8edd0b6d866ee0npbc-v5m-dim-a58fdd.jpg",
      ],
    },
    docs: {
      bg: [],
      en: [],
    },
    model: "NPBC-V5",
  },
  {
    id: "46",
    slug: "46-0-nhc-h36-distancionno-upravlyaem-elektronen-termoregulator-za-kombiniran-boiler-sys-solarna-instalaciya",
    card: "/media/051156f7f2836876574e20ccbca2d2b8c99e580nhc-h36-d8c1e0.jpg",
    related: ["50"],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "NHC-H36 - Електронен терморегулатор за комбиниран бойлер със соларна инсталация",
      en: "NHC-H36 - Electronic temperature regulator for combined water heater with Solar collector",
    },
    excerpt: {
      bg: "NHC-H36 са нова фамилия електронни терморегулатори, предназначени за вграждане в комбинирани електрически бойлери с инсталация със слънчев колектор. Контролерът съдържа в себе си един…",
      en: "NHC-H36 is a new family of electronic temperature regulators, designed for combined water heaters with up to two heat exchangers and a mono phase electrical heater. The controller has a…",
    },
    gallery: {
      bg: [
        "/media/051156f7f2836876574e20ccbca2d2b8c99e580nhc-h36-d8c1e0.jpg",
        "/media/1156746208df261b103e985cd05e6154ed2a0nhc-h36-2-e08dd8.jpg",
      ],
      en: [
        "/media/051156f7f2836876574e20ccbca2d2b8c99e580nhc-h36-d8c1e0.jpg",
        "/media/1156746208df261b103e985cd05e6154ed2a0nhc-h36-2-e08dd8.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/H36_RM_v1_3_BG.pdf",
          label: "H36_RM_v1_3_BG.pdf",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/Naturela_water_heater_solutions_bg.pdf",
          label: "Интелилигентни управлениея за електрически и комбинирани бойлери",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-H36",
  },
  {
    id: "45",
    slug: "45-0-nhc-h42-distancionno-upravlyaem-kontroler-za-kombiniran-boiler-s-do-dva-toploobmennika",
    card: "/media/11567ad95735399224c5fd9ab18e6d43c3970nhc-h42-3-81660c.jpg",
    related: [],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "NHC-H42 – Електронен терморегулатор за комбиниран бойлер с два топлообменника.",
      en: "NHC-H42 – Electronic temperature regulator for combined water heater with up to two heat exchangers",
    },
    excerpt: {
      bg: "NHC-H42 са ново поколение електронни терморегулатори за бойлери комбинирани с инсталации със слънчев колектор и котел.Този контролер запазва добрите постижения на контролерите от серията…",
      en: "NHC-H42 is a new generation of electronic temperature regulators, designed to be built in combined water heaters with up to three heat sources: an electrical heater, a solar installation…",
    },
    gallery: {
      bg: [
        "/media/11567ad95735399224c5fd9ab18e6d43c3970nhc-h42-3-81660c.jpg",
        "/media/11567ad95735399224c5fd9ab18e6d43c3971nhc-h42-1-e6236d.jpg",
        "/media/d95735399224c5fd9ab18e6d43c3972nhc-h43-monitor-ed9934.jpg",
        "/media/1567ad95735399224c5fd9ab18e6d43c3973nhc-h42-2a-7afdd2.jpg",
      ],
      en: [
        "/media/11567ad95735399224c5fd9ab18e6d43c3970nhc-h42-3-81660c.jpg",
        "/media/11567ad95735399224c5fd9ab18e6d43c3971nhc-h42-1-e6236d.jpg",
        "/media/d95735399224c5fd9ab18e6d43c3972nhc-h43-monitor-ed9934.jpg",
        "/media/1567ad95735399224c5fd9ab18e6d43c3973nhc-h42-2a-7afdd2.jpg",
      ],
    },
    docs: {
      bg: [],
      en: [],
    },
    model: "NHC-H42",
  },
  {
    id: "43",
    slug: "43-0-nhc-pc2i-elektronen-termoregulator-za-panelen-konvektor",
    card: "/media/6c13a2ed123a4c155a2e6843e1c144eeb0nhc-pc2i-1-l-a61ce7.jpg",
    related: ["52"],
    cat: {
      bg: "elektronni-termoregulatori-za-bitovi-otoplitelni-uredi",
      en: "digital-electronic-controllers-for-household-heating-appliances",
    },
    title: {
      bg: "NHC-PC2I - Електронен терморегулатор за панелен конвектор",
      en: "NHC-PC2I - Electronic Temperature Regulators for electric panel convector",
    },
    excerpt: {
      bg: "NHC- PC 2 I е електронен терморегулатор, предназначен за вграждане в електрически панелни конвектори, модели CN03 произвеждани от „TESY“. Терморегулаторът се управлява от интелигентен…",
      en: "NHC-PC2I is an electronic temperature regulator, designed for the electrical panel convectors model CN03, produced by TESY. The temperature regulator uses a smart algorithm to achieve and…",
    },
    gallery: {
      bg: [
        "/media/3a5da4bd9a0442828a214313809c3e6b0nhc-pc2i-conv-a1097a.jpg",
        "/media/1563e15ed6a00202ae254e180f2c7235c4b0convector3-07dedb.jpg",
        "/media/15685fc6c219d1f747ae644b69ed2e1ca3f0convector2-6c8430.jpg",
        "/media/682b7ecfe3a00f13e153c7c48257621fe0nhc-pc2i-rf1-271bc6.jpg",
        "/media/13a15bb7744afbf9c18435068e7fb90nhc-pc2i-man-ss-c4baaf.jpg",
        "/media/6c13a2ed123a4c155a2e6843e1c144eeb0nhc-pc2i-1-l-a61ce7.jpg",
      ],
      en: [
        "/media/3a5da4bd9a0442828a214313809c3e6b0nhc-pc2i-conv-a1097a.jpg",
        "/media/1563e15ed6a00202ae254e180f2c7235c4b0convector3-07dedb.jpg",
        "/media/15685fc6c219d1f747ae644b69ed2e1ca3f0convector2-6c8430.jpg",
        "/media/682b7ecfe3a00f13e153c7c48257621fe0nhc-pc2i-rf1-271bc6.jpg",
        "/media/13a15bb7744afbf9c18435068e7fb90nhc-pc2i-man-ss-c4baaf.jpg",
        "/media/6c13a2ed123a4c155a2e6843e1c144eeb0nhc-pc2i-1-l-a61ce7.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NHC-PC2_RM_v2_3.pdf",
          label: "NHC-PC2_RM_v2_3.pdf",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-PC2I",
  },
  {
    id: "42",
    slug: "42-0-nhpc-v3-controller-for-heat-pump-with-electronic-expansion-valve",
    card: "/media/6a81f70b905c7220c242af2f0971021cc1nhpc-v3-35-1-b836f1.jpg",
    related: ["18", "49", "54"],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "NHPC-V3 – Контролер за Split система термопомпен бойлер, с управляем разширителен вентил",
      en: "NHPC-V3 – Controller for Heat Pump with electronic expansion valve control",
    },
    excerpt: {
      bg: "NHPC-V3 е контролер за бойлер с термопомпа, монтирана в отделно външно тяло. Контролерът е изпълнен в два отделни блока: „Силов блок“ NHPC-PM- V3.2 служещ за управление и контрол на всички…",
      en: "NHPC-V3 is a new generation intelligent controller for split system water heater with heat pump mounted in an outdoor unit. The controller has two blocks: Power block NHPC-PM-V3 .2…",
    },
    gallery: {
      bg: [
        "/media/1156a81f70b905c7220c242af2f0971021cc0nhpc-v3-5-8e6ca9.jpg",
        "/media/562bad9dc4595aca8258fc6e9d8ac7177f0nhpc-v3-h43-6389a3.jpg",
        "/media/67b892c59683f3056f67d3ce4f6983cf1nhpc-v3-h43-1-8f9c74.jpg",
        "/media/6a81f70b905c7220c242af2f0971021cc1nhpc-v3-35-1-b836f1.jpg",
        "/media/115691903714d440b354e8ef4f443e9f93130tboiler-1-b0ab5b.jpg",
      ],
      en: [
        "/media/1156a81f70b905c7220c242af2f0971021cc0nhpc-v3-5-8e6ca9.jpg",
        "/media/562bad9dc4595aca8258fc6e9d8ac7177f0nhpc-v3-h43-6389a3.jpg",
        "/media/67b892c59683f3056f67d3ce4f6983cf1nhpc-v3-h43-1-8f9c74.jpg",
        "/media/6a81f70b905c7220c242af2f0971021cc1nhpc-v3-35-1-b836f1.jpg",
        "/media/115691903714d440b354e8ef4f443e9f93130tboiler-1-b0ab5b.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NHPC-V3_TD_1_0.pdf",
          label: "NHPC-V3_TD_1_0.pdf",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHPC-V3",
  },
  {
    id: "40",
    slug: "40-npbc-v3-electronic-controllers-for-pellet-burner",
    card: "/media/566a819c5ee8475a6bfee9078d22f7fdac1npbc-v3-mb2-173438.jpg",
    related: ["39", "51"],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "NPBC-V3 – Универсален контролер за управление на пелетни горелки и котли",
      en: "NPBC-V3 - Universal pellet burner controller with expanded functions",
    },
    excerpt: {
      bg: "NPBC-V3 е контролер управляващ едновременно пелетна горелка, котел със система за почистване и допълнителна вентилация, циркулационни помпи за бойлер и отопление и др. Той има 12 изхода…",
      en: "NPBC-V3 is a device controlling at the same time a pellet burner, a boiler with a cleaning system and an additional ventilation, circulation pumps for water heating and central heating and…",
    },
    gallery: {
      bg: [
        "/media/566a819c5ee8475a6bfee9078d22f7fdac0npbc-v3-mb3-70ec25.jpg",
        "/media/561a68155305003e306e4ab36dd272079a0nhpc-rc2-2l-64d39f.jpg",
        "/media/566a819c5ee8475a6bfee9078d22f7fdac1npbc-v3-mb2-173438.jpg",
        "/media/341f4fe3e11bea3d4092fc17b4d0npbc-v3-soft-main1-de8ef5.jpg",
        "/media/51156a37932d1bc0ca5111d6b2b35a2770cf20mon-scr2-611cc2.jpg",
      ],
      en: [
        "/media/566a819c5ee8475a6bfee9078d22f7fdac0npbc-v3-mb3-70ec25.jpg",
        "/media/561a68155305003e306e4ab36dd272079a0nhpc-rc2-2l-64d39f.jpg",
        "/media/566a819c5ee8475a6bfee9078d22f7fdac1npbc-v3-mb2-173438.jpg",
        "/media/341f4fe3e11bea3d4092fc17b4d0npbc-v3-soft-main1-de8ef5.jpg",
        "/media/51156a37932d1bc0ca5111d6b2b35a2770cf20mon-scr2-611cc2.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/Mounting_NPBC_V3_1_1BG.pdf",
          label: "Препоръки за монтаж на контролер за пелетна горелка",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NPBC-V3_rev1_1_BG.pdf",
          label: "NPBC-V3_rev1_1_BG.pdf",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NPBC-V3",
  },
  {
    id: "39",
    slug: "39-npbc-v2-controller-for-pellet-burner",
    card: "/media/56838516866ad22450c97927a1b6922a0a2npbc-v3m-wd-413f6d.jpg",
    related: ["51", "56"],
    cat: {
      bg: "elektronni-kontroleri-za-peletni-gorelki-i-kotli",
      en: "electronic-controllers-for-pellet-burner-bojler",
    },
    title: {
      bg: "NPBC-V3M - Електронен контролер за пелетни горелки",
      en: "NPBC-V3M - Electronic Pellet Burner Controller",
    },
    excerpt: {
      bg: "Контролерът NPBC-V3M е хардуерна модернизация на доказалият се със своите качества контролер NPBC-V3. Основните предимства на новият контролер са: Увеличен кратковременен допустим ток през…",
      en: "The controller NPBC-V3M is a hardware and software upgrade of the already proven controller NPBC-V3 . The new version has all the functions and options of the old pellet burner controller,…",
    },
    gallery: {
      bg: [
        "/media/56838516866ad22450c97927a1b6922a0a1npbc-v3m-1m-cff55e.jpg",
        "/media/56838516866ad22450c97927a1b6922a0a2npbc-v3m-wd-413f6d.jpg",
        "/media/6866ad22450c97927a1b6922a0a3fp-display2-7-cutl-3725df.jpg",
        "/media/0511567e1558535e5cc310e733f39ffbefc2a70nrc5-p1-ea5e0b.jpg",
        "/media/e1f435fabb43b4b80202cf615a611d00npbc-v3m-dim-l-bed71a.jpg",
        "/media/51051156a57bb129f74f8f6d888590212d6ae8060disp2-520b9f.jpg",
        "/media/05115614dc0d653ba7dd8a605f1cc34bd4388c0tstat2a-eb429e.jpg",
        "/media/15614dc0d653ba7dd8a605f1cc34bd4388c1gsmcontr1a-91bc03.jpg",
      ],
      en: [
        "/media/56838516866ad22450c97927a1b6922a0a1npbc-v3m-1m-cff55e.jpg",
        "/media/56838516866ad22450c97927a1b6922a0a2npbc-v3m-wd-413f6d.jpg",
        "/media/6866ad22450c97927a1b6922a0a3fp-display2-7-cutl-3725df.jpg",
        "/media/0511567e1558535e5cc310e733f39ffbefc2a70nrc5-p1-ea5e0b.jpg",
        "/media/e1f435fabb43b4b80202cf615a611d00npbc-v3m-dim-l-bed71a.jpg",
        "/media/51051156a57bb129f74f8f6d888590212d6ae8060disp2-520b9f.jpg",
        "/media/05115614dc0d653ba7dd8a605f1cc34bd4388c0tstat2a-eb429e.jpg",
        "/media/15614dc0d653ba7dd8a605f1cc34bd4388c1gsmcontr1a-91bc03.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NPBC-V3M_Monitoring_UM_1_5_BG.pdf",
          label: "NPBC-V3M-1",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NPBC-V3M",
  },
  {
    id: "35",
    slug: "35-0-centralizirano-upravlenie-i-kontrol-na-kst",
    card: "/media/351051156696e3213b56600ed05378f157d342439026-0-442753.jpg",
    related: [],
    cat: {
      bg: "sistemi-za-btk",
      en: "communication-register-and-billing-systems-for-btc",
    },
    title: {
      bg: "Централизирано управление и контрол на КСТ (Компютъризирана Система за Таксуване)",
      en: "Centralized Control and Monitoring of RITA-V2 systems",
    },
    excerpt: {
      bg: "Управлението и контрола на всички КСТ в едно подразделение на БТК (РУД, ТРД и др.) може да бъде централизирано като се създаде Център за управление на КСТ и се използва ИНТРАНЕТ връзка…",
      en: "The monitoring and control of a Computerized Charging System RITA-V2 in BTC divisions, can be centralized, by establishment of RITA-V2 Control Center and INTRANET connection between the…",
    },
    gallery: {
      bg: ["/media/351051156696e3213b56600ed05378f157d342439026-0-442753.jpg"],
      en: ["/media/351051156696e3213b56600ed05378f157d342439026-0-442753.jpg"],
    },
    docs: {
      bg: [],
      en: [],
    },
    model: "",
  },
  {
    id: "34",
    slug: "34-0-informacionna-sistema-rita-all",
    card: "/media/6884a735e60e8b1f6767641abb1953d71rita-all-scr2-5f5f25.jpg",
    related: [],
    cat: {
      bg: "sistemi-za-btk",
      en: "communication-register-and-billing-systems-for-btc",
    },
    title: {
      bg: "Информационна система Детайлизирана и трафична информация за телефонни разговори",
      en: "Information System Detailed and Traffic Information for Telephone Calls",
    },
    excerpt: {
      bg: "Информационната система RITA-ALL, обединява всички данни за проведените телефонни разговори, регистрирани от системата за таксуване RITA-V2 за цял град или област с общо управление. С нейна…",
      en: "The Information System RITA-All consolidates all data collected by the Computerized Charging and Billing System RITA-V2 for an entire city or region with governance. It allows to prepare…",
    },
    gallery: {
      bg: [
        "/media/6884a735e60e8b1f6767641abb1953d70rita-all-scr1-e2ed77.jpg",
        "/media/3510511563d0818c3e40a337da6941409ea9fdc4b025-5-c54235.jpg",
        "/media/6884a735e60e8b1f6767641abb1953d71rita-all-scr2-5f5f25.jpg",
      ],
      en: [
        "/media/6884a735e60e8b1f6767641abb1953d70rita-all-scr1-e2ed77.jpg",
        "/media/3510511563d0818c3e40a337da6941409ea9fdc4b025-5-c54235.jpg",
        "/media/6884a735e60e8b1f6767641abb1953d71rita-all-scr2-5f5f25.jpg",
      ],
    },
    docs: {
      bg: [],
      en: [],
    },
    model: "",
  },
  {
    id: "33",
    slug: "33-0-dx100-cifrova-komutacionna-sistema",
    card: "/media/10511564d272507b376b9a70dacd1e0d828dc7b1image5-d96ebb.jpg",
    related: [],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "DX100 - Цифрова комутационна система за услуги предоставяни чрез оператор",
      en: "DX100 - Digital communication system for operator-controlled services",
    },
    excerpt: {
      bg: "DX100 е комутационна система с възможности за автоматично разпределяне на множество повиквания (ACD - Automatic Call Distributors). С нейна помощ, се приемат повиквания от селищната…",
      en: "The Digital communication system DX100 , offers Automatic Call Distribution (ACD) of public telephone network calls to emergency, information or maintenance services. When a call request…",
    },
    gallery: {
      bg: [
        "/media/0511564d272507b376b9a70dacd1e0d828dc7b0dx100-1-445d26.jpg",
        "/media/10511564d272507b376b9a70dacd1e0d828dc7b1image5-d96ebb.jpg",
        "/media/1564d272507b376b9a70dacd1e0d828dc7b2dx100-pult-4ba331.jpg",
        "/media/35105115609798a49e38814c34b859291d2d3a35c024-2-570b8f.jpg",
      ],
      en: [
        "/media/0511564d272507b376b9a70dacd1e0d828dc7b0dx100-1-445d26.jpg",
        "/media/10511564d272507b376b9a70dacd1e0d828dc7b1image5-d96ebb.jpg",
        "/media/1564d272507b376b9a70dacd1e0d828dc7b2dx100-pult-4ba331.jpg",
        "/media/35105115609798a49e38814c34b859291d2d3a35c024-2-570b8f.jpg",
      ],
    },
    docs: {
      bg: [],
      en: [],
    },
    model: "DX100",
  },
  {
    id: "32",
    slug: "32-0-sistema-za-detailizirano-taksuvane-rita-v2",
    card: "/media/351051156a6bd887297ab8250d32b200e0a050c9d023-2-c6de29.jpg",
    related: [],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "RITA-V2 - Компютъризирана система за таксуване в аналогови телефонни централи тип А29",
      en: "RITA-V2 - Computerized call charging and billing system of subscribers in telephone exchanges type A29",
    },
    excerpt: {
      bg: "Системата RITA-V2 регистрираща и съхраняваща необходимата информация за всички телефонни разговори в селищни телефонни централи тип А-29. Изградена е на модулен принцип и позволява…",
      en: "The system RITA - V2 registers and records the necessary information for all calls of A 29 type automatic telephone exchange (ATX). It is of modular design and allows coverage of ATX with…",
    },
    gallery: {
      bg: [
        "/media/b92d8e29ad35999ee9906b14e5ffc92b0rita-v2-main1-fa7cbc.jpg",
        "/media/351051156a6bd887297ab8250d32b200e0a050c9d023-2-c6de29.jpg",
        "/media/35105115675ec90d7c7e097e1c7576d33b7a1522c023-4-b97f39.jpg",
        "/media/7351051156cb76d9411e342b250ad06878bb6a8b7d2c01-17bd0b.jpg",
        "/media/351051156cb76d9411e342b250ad06878bb6a8b7d023-3-5634ff.jpg",
        "/media/351051156cb76d9411e342b250ad06878bb6a8b7d123-5-dfec22.jpg",
        "/media/511563111b443ecbc08494b8335c9aa8ce2b80graph-gi-1f5714.jpg",
        "/media/454d0b59d8744e4ab1535b7064d045351rita-v2-main2-67f682.jpg",
        "/media/454d0b59d8744e4ab1535b7064d045352rita-v2-main3-2feb69.jpg",
      ],
      en: [
        "/media/b92d8e29ad35999ee9906b14e5ffc92b0rita-v2-main1-fa7cbc.jpg",
        "/media/351051156a6bd887297ab8250d32b200e0a050c9d023-2-c6de29.jpg",
        "/media/35105115675ec90d7c7e097e1c7576d33b7a1522c023-4-b97f39.jpg",
        "/media/7351051156cb76d9411e342b250ad06878bb6a8b7d2c01-17bd0b.jpg",
        "/media/351051156cb76d9411e342b250ad06878bb6a8b7d023-3-5634ff.jpg",
        "/media/351051156cb76d9411e342b250ad06878bb6a8b7d123-5-dfec22.jpg",
        "/media/511563111b443ecbc08494b8335c9aa8ce2b80graph-gi-1f5714.jpg",
        "/media/454d0b59d8744e4ab1535b7064d045351rita-v2-main2-67f682.jpg",
        "/media/454d0b59d8744e4ab1535b7064d045352rita-v2-main3-2feb69.jpg",
      ],
    },
    docs: {
      bg: [],
      en: [],
    },
    model: "RITA-V2",
  },
  {
    id: "24",
    slug: "24-0-pv-sctl3-sistema-za-monitoring-i-diagnostika",
    card: "/media/351051156008d8e49e209916cee31c9777b2eaf92036-1-5ee5db.jpg",
    related: ["23"],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "PV-SCTL3 - Система за мониторинг и диагностика на PV модули във фотоволтаична централа.",
      en: "PV-SCTL3 - String Level Wireles Photovoltaic Monitoring System",
    },
    excerpt: {
      bg: "Фотоволтаичните панели и инсталацията, свързваща ги с инвертора, са сред най-важните компоненти на всяка фотоволтаична електроцентрала. От тяхната безотказна работа и ефективност основно…",
      en: "The photovoltaic panels and DC installation, connecting the panels with the inverter, are among the most important components of each photovoltaic power plant. Their flawless functioning…",
    },
    gallery: {
      bg: [
        "/media/351051156008d8e49e209916cee31c9777b2eaf92036-1-5ee5db.jpg",
        "/media/0511562ecbe44881b072024efd7b2f176955fa0cb-d-v3-183c30.jpg",
        "/media/872834c9a937da001b3654a1e5cc00pv-4cry-v3-print-c36693.jpg",
        "/media/3f90cdee31e0ceae6c3f3cdae9c0pv-sctl3-dimension-733fc5.jpg",
      ],
      en: [
        "/media/351051156008d8e49e209916cee31c9777b2eaf92036-1-5ee5db.jpg",
        "/media/0511562ecbe44881b072024efd7b2f176955fa0cb-d-v3-183c30.jpg",
        "/media/872834c9a937da001b3654a1e5cc00pv-4cry-v3-print-c36693.jpg",
        "/media/3f90cdee31e0ceae6c3f3cdae9c0pv-sctl3-dimension-733fc5.jpg",
      ],
    },
    docs: {
      bg: [],
      en: [],
    },
    model: "PV-SCTL3",
  },
  {
    id: "23",
    slug: "23-0-pv-sctl16-pv-monitoring",
    card: "/media/1156a53f900275dccff1de158789fc75c6aa0pv-sctl16-6b0d18.jpg",
    related: [],
    cat: {
      bg: "sistemi-za-distancionen-monitoring-na-fotovoltaichni-centrali",
      en: "system-for-remote-monitoring-of-photovoltaic-power-plant",
    },
    title: {
      bg: "PV-SCTL16 - Система за стрингов мониторинг на фотоволтаични централи",
      en: "PV-SCTL16 - Smart Wireless String Level Photovoltaic Monitoring System",
    },
    excerpt: {
      bg: "PV-SCTL16 е система за мониторинг на фотоволтаични централи, чиито измервателните модули са разположени в Combiner Box. Те измерват тока и напрежението, генерирани от всеки стринг…",
      en: "PV-SCTL16 is a modernized version of its proven with indisputable quality and reliability string level monitoring system PV-SCTL3. It has new wireless measuring modules with the same…",
    },
    gallery: {
      bg: [
        "/media/1156a53f900275dccff1de158789fc75c6aa0pv-sctl16-6b0d18.jpg",
        "/media/5632f2354a2e398ba73f0a4d7f71ad091b0pv-sctl16-2-94ce92.jpg",
        "/media/56ecb69d545a81c4d95b55bd990bb4cdd20pv-sctl16-3-76d754.jpg",
        "/media/dd4681526841fd8e68eb501fa7f32fb0dimensions16-l-b667af.jpg",
      ],
      en: [
        "/media/1156a53f900275dccff1de158789fc75c6aa0pv-sctl16-6b0d18.jpg",
        "/media/5632f2354a2e398ba73f0a4d7f71ad091b0pv-sctl16-2-94ce92.jpg",
        "/media/56ecb69d545a81c4d95b55bd990bb4cdd20pv-sctl16-3-76d754.jpg",
        "/media/dd4681526841fd8e68eb501fa7f32fb0dimensions16-l-b667af.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/PV-SCTL16_PB_3.pdf",
          label: "PV-SCTL16_PB_3.pdf",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "PV-SCTL16",
  },
  {
    id: "18",
    slug: "18-0-nhpc-v2-heat-pump-water-heater-controller-",
    card: "/media/1156047f168218efc41e5e7ed3b47e10c40e0nhpc-fig1-9126a2.jpg",
    related: ["42", "49", "53"],
    cat: {
      bg: "elektronni-termoregulatori",
      en: "digital-electronic-controllers-for-water-heaters",
    },
    title: {
      bg: "NHPC-V2 - Електронно управление за бойлер с Термопомпа (Термодинамичен бойлер)",
      en: "NHPC-V2 - Heat Pump Water Heater Controller",
    },
    excerpt: {
      bg: "Бойлерът с Термопомпа или така нареченият Термодинамичен бойлер, е един от най-новите уреди, предназначени за значително намаляване на разходите за топлата вода. Още от самото название,…",
      en: "NHPC-V2 is designed for installing in household water heaters with an air-source heat pump and an electric heating element. Its main purpose is to control the water heating process in an…",
    },
    gallery: {
      bg: [
        "/media/1156047f168218efc41e5e7ed3b47e10c40e0nhpc-fig1-9126a2.jpg",
        "/media/51156d950ccfc6647370a0a81b5f3f422144b0nhpc-sh2-2d5551.jpg",
        "/media/1156d950ccfc6647370a0a81b5f3f422144b1nhpc-fig3-4270b8.jpg",
        "/media/1156d950ccfc6647370a0a81b5f3f422144b2nhpc-fig2-a0064e.jpg",
      ],
      en: [
        "/media/1156047f168218efc41e5e7ed3b47e10c40e0nhpc-fig1-9126a2.jpg",
        "/media/51156d950ccfc6647370a0a81b5f3f422144b0nhpc-sh2-2d5551.jpg",
        "/media/1156d950ccfc6647370a0a81b5f3f422144b1nhpc-fig3-4270b8.jpg",
        "/media/1156d950ccfc6647370a0a81b5f3f422144b2nhpc-fig2-a0064e.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NHPC-V2_rev1_2_BG.pdf",
          label: "NHPC-V2_rev1_2_BG.pdf",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHPC-V2",
  },
  {
    id: "17",
    slug: "17-0-nhc-h41-elektronen-termoregulator-za-kombiniran-boiler",
    card: "/media/1569a7d11ebe20eb55785be058e31aafacf1nhc-h41-1c-270b14.jpg",
    related: ["49"],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "NHC-H41 - Електронен терморегулатор за комбиниран бойлер с 2 топлообменника",
      en: "NHC-H41 - Digital Electronic Controller for Combined Water Heaters with 2 Heat Exchangers",
    },
    excerpt: {
      bg: "NHC-H41 е терморегулатор с модерен и ефектен дизайн, предназначен за управление на електрически бойлер комбиниран с инсталация за подгряване на вода от слънчев колектор и котел, камина или…",
      en: "NHC-H41 is a new generation electronic temperature regulator for electric water heaters equipped with two heat-exchangers for solar collector and boiler. Following the state-of-the-art…",
    },
    gallery: {
      bg: [
        "/media/1569a7d11ebe20eb55785be058e31aafacf0nhc-h41-2a-ed98e1.jpg",
        "/media/1569a7d11ebe20eb55785be058e31aafacf1nhc-h41-1c-270b14.jpg",
      ],
      en: [
        "/media/1569a7d11ebe20eb55785be058e31aafacf0nhc-h41-2a-ed98e1.jpg",
        "/media/1569a7d11ebe20eb55785be058e31aafacf1nhc-h41-1c-270b14.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/file/uploads/H41-2_RM_v2_1.pdf",
          label: "Ръководство за работа с комбиниран електронен терморегулатор NHC-H41",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-H41",
  },
  {
    id: "13",
    slug: "13-nhc-h33-nhc-h34-elektronen-termoregulator-za-kombiniran-boiler",
    card: "/media/11565cbf260fcce42844335274504b2682920nhc-34-1b-72821d.jpg",
    related: ["50"],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "NHC-H34 - Електронен терморегулатор за комбиниран бойлер със слънчев колектор",
      en: "NHC-H34 - Digital Electronic Controller for Water Heaters with Solar collector",
    },
    excerpt: {
      bg: "NHC-H34 са фамилия електронни терморегулатори, предназначени за управление и контрол на бойлери с инсталация със слънчев колектор. И двата модела са с модерен графичен LCD дисплей, ясно…",
      en: "NHC-H34 is a new generation of electronic temperature regulators, designed for management and control of an electric water heaters, combined with a solar thermal collectors. Both models…",
    },
    gallery: {
      bg: [
        "/media/35105115669935e084568c1c08c8fe1249045839a0fig1-e78630.jpg",
        "/media/1051156a448d245d988d31137607941d925982e0pic197-dadfa7.jpg",
        "/media/11565cbf260fcce42844335274504b2682920nhc-34-1b-72821d.jpg",
        "/media/11565cbf260fcce42844335274504b2682921nhc-h33-l-8e6ae4.jpg",
      ],
      en: [
        "/media/35105115669935e084568c1c08c8fe1249045839a0fig1-e78630.jpg",
        "/media/1051156a448d245d988d31137607941d925982e0pic197-dadfa7.jpg",
        "/media/11565cbf260fcce42844335274504b2682920nhc-34-1b-72821d.jpg",
        "/media/11565cbf260fcce42844335274504b2682921nhc-h33-l-8e6ae4.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/file/uploads/NHC-H34_RM_v2_1.pdf",
          label: "Ръководство за работа с комбиниран електронен терморегулатор NHC-H34",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-H34",
  },
  {
    id: "12",
    slug: "12-nhc-33-nhc-34-elektronen-termoregulator-za-el-boiler",
    card: "/media/51156ad3ca628458ac6bd6c0f7ed808dcb4f20nhc-33-r-e47303.jpg",
    related: ["49", "53"],
    cat: {
      bg: "elektronni-termoregulatori",
      en: "digital-electronic-controllers-for-water-heaters",
    },
    title: {
      bg: "NHC-33 / NHC-34 / NHC-34M - Терморегулатор за електрически бойлер с LCD дисплей",
      en: "NHC-33 / NHC-34 / NHC-34M - Digital Electronic Controller for Electric Water Heaters",
    },
    excerpt: {
      bg: "NHC-33 / NHC-34 / NHC-34M са електронни терморегулатори, предназначени за управление и контрол на електрически бойлери от висок клас. Те са с голям графичен LCD дисплей, благодарение на…",
      en: "NHC-33, NHC-34 and NHC-34M are new electronic temperature regulators for electric water heaters of higher class. The device has a wide graphic LCD display with added new and useful…",
    },
    gallery: {
      bg: [
        "/media/56c6e0725a147cfb07e0334925d119121b0nhc-34-v7-1-e0d719.jpg",
        "/media/1156fa1fa87b19c173ba2795da7521dfcd3d0nhc-34v7m-967244.jpg",
        "/media/51156ad3ca628458ac6bd6c0f7ed808dcb4f20nhc-33-r-e47303.jpg",
        "/media/51156ae006f97ad572fd53e34068646671fc60nsh-scr1-0909a8.jpg",
        "/media/51156ae006f97ad572fd53e34068646671fc61nsh-scr2-3af037.jpg",
        "/media/1156095f3045212c3ab8f13f497934a08e870nhc-34m-1-cce318.jpg",
      ],
      en: [
        "/media/56c6e0725a147cfb07e0334925d119121b0nhc-34-v7-1-e0d719.jpg",
        "/media/1156fa1fa87b19c173ba2795da7521dfcd3d0nhc-34v7m-967244.jpg",
        "/media/51156ad3ca628458ac6bd6c0f7ed808dcb4f20nhc-33-r-e47303.jpg",
        "/media/51156ae006f97ad572fd53e34068646671fc60nsh-scr1-0909a8.jpg",
        "/media/51156ae006f97ad572fd53e34068646671fc61nsh-scr2-3af037.jpg",
        "/media/1156095f3045212c3ab8f13f497934a08e870nhc-34m-1-cce318.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NHC-34_UM_V2_6-2.pdf",
          label: "Ръководство за работа с електронен терморегулатор NHC-34",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NHC-34M_UM_V2_6-2.pdf",
          label: "Ръководство за работа с електронен терморегулатор NHC-34M",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/Naturela_water_heater_solutions_bg.pdf",
          label: "Интелигентни управления за електрически и комбинирани бойлери",
          ext: "PDF",
        },
        {
          href: "https://www.naturela-bg.com/files/NSH_34_UM_1_BG.pdf",
          label: "Управление на NHC-34 през web базираната система Naturela Smart Home",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-33/NHC-34/NHC-34M",
  },
  {
    id: "8",
    slug: "8-nhc-32",
    card: "/media/0511566a26aefdd19957e4f73c3d40f42496940pic179b-53acca.jpg",
    related: [],
    cat: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "NHC-32 - Електронен терморегулатор за електрически бойлер с LED индикация",
      en: "NHC-32 - Electronic Temperature Regulator with LED display for Electric Water Heaters",
    },
    excerpt: {
      bg: "NHC-32 е електронен терморегулатор с LED индикация, предназначен за електрически бойлери от среден клас. Освен прецизното регулиране на температурата, този блок контролира състоянието на…",
      en: "NHC-32 is electronic temperature regulator with LED display designed for an electric water heaters. This block not only regulates precisely the temperature, but also controls the condition…",
    },
    gallery: {
      bg: [
        "/media/51156d046cb0b9d20eb3a538ea457aa2b46d10nhc32-1l-cd415d.jpg",
        "/media/051156f70d62019b3ca97203e7768f84e6ba771pic178b-1718fc.jpg",
        "/media/0511566a26aefdd19957e4f73c3d40f42496940pic179b-53acca.jpg",
      ],
      en: [
        "/media/51156d046cb0b9d20eb3a538ea457aa2b46d10nhc32-1l-cd415d.jpg",
        "/media/051156f70d62019b3ca97203e7768f84e6ba771pic178b-1718fc.jpg",
        "/media/0511566a26aefdd19957e4f73c3d40f42496940pic179b-53acca.jpg",
      ],
    },
    docs: {
      bg: [
        {
          href: "https://www.naturela-bg.com/files/NHC-32_UM_v3_1.pdf",
          label: "NHC-32_UM_v3_1.pdf",
          ext: "PDF",
        },
      ],
      en: [],
    },
    model: "NHC-32",
  },
];

export const categories: Category[] = [
  {
    key: "elektronni-kontroleri-za-peletni-gorelki-i-kotli",
    icon: "/n/cat-serv1.png",
    slug: {
      bg: "elektronni-kontroleri-za-peletni-gorelki-i-kotli",
      en: "electronic-controllers-for-pellet-burner-bojler",
    },
    title: {
      bg: "Контролери за пелетни горелки, котли и камини",
      en: "Controllers for pellet Burners, pellet Stoves and pellet boilers",
    },
    products: ["39", "51", "56"],
  },
  {
    key: "elektronni-termoregulatori",
    icon: "/n/cat-serv2_1.png",
    slug: {
      bg: "elektronni-termoregulatori",
      en: "digital-electronic-controllers-for-water-heaters",
    },
    title: {
      bg: "Електронни терморегулатори за електрически и комбинирани бойлери",
      en: "Digital electronic controllers for water heaters",
    },
    products: ["12", "18", "49", "50", "53", "54", "55", "57"],
  },
  {
    key: "elektronni-termoregulatori-za-bitovi-otoplitelni-uredi",
    icon: "/n/cat-serv3_1.png",
    slug: {
      bg: "elektronni-termoregulatori-za-bitovi-otoplitelni-uredi",
      en: "digital-electronic-controllers-for-household-heating-appliances",
    },
    title: {
      bg: "Контролери за електрически отоплителни уреди",
      en: "Controllers for electric heating appliances",
    },
    products: ["43", "48", "52", "58"],
  },
  {
    key: "sistemi-za-distancionen-monitoring-na-fotovoltaichni-centrali",
    icon: "/n/cat-serv4.png",
    slug: {
      bg: "sistemi-za-distancionen-monitoring-na-fotovoltaichni-centrali",
      en: "system-for-remote-monitoring-of-photovoltaic-power-plant",
    },
    title: {
      bg: "Системи за мониторинг на фотоволтаични централи",
      en: "Remote Monitoring systems for Photovoltaic Power Plant",
    },
    products: ["23"],
  },
  {
    key: "ostareli-produkti",
    icon: "/n/cat-serv5_1.png",
    slug: {
      bg: "ostareli-produkti",
      en: "obsolete-products",
    },
    title: {
      bg: "Стари продукти",
      en: "Obsolete products",
    },
    products: ["8", "13", "17", "24", "32", "33", "40", "42", "45", "46", "47"],
  },
  {
    key: "sistemi-za-btk",
    icon: "/media/351051156a6bd887297ab8250d32b200e0a050c9d023-2-c6de29.jpg",
    slug: {
      bg: "sistemi-za-btk",
      en: "communication-register-and-billing-systems-for-btc",
    },
    title: {
      bg: "Комуникационни, регистриращи и билинг системи, предназначени за БТК",
      en: 'Communication, register and billing systems designed for "Bulgarian Telecommunication Company" (BTC)',
    },
    products: ["34", "35"],
  },
];

export const productsById: Record<string, Product> = Object.fromEntries(
  products.map((p) => [p.id, p]),
);

/** Old URLs carry a numeric id prefix; that id is the stable key. */
export const idFromSlug = (slug: string): string => slug.split("-")[0] ?? slug;

export const productBySlug = (slug: string): Product | undefined => productsById[idFromSlug(slug)];

export const categoryBySlug = (slug: string, lang: Lang): Category | undefined =>
  categories.find((c) => c.slug[lang] === slug);

export const productsOf = (c: Category): Product[] =>
  c.products.map((id) => productsById[id]).filter((p): p is Product => Boolean(p));
