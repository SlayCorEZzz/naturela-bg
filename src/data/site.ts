import type { L, Lang } from "./catalog";

/** Everything below is transcribed from naturela-bg.com — no invented facts. */

export const OLD_SITE = "https://www.naturela-bg.com";

export const contact = {
  company: "НАТУРЕЛА",
  city: { bg: "гр. Варна, 9020", en: "Varna 9020, Bulgaria" } satisfies L<string>,
  street: {
    bg: "ж.к. Възраждане 1, ул. Ана Феликсова № 13",
    en: "Vazrazhdane 1, 13 Ana Feliksova Str.",
  } satisfies L<string>,
  phones: [
    { label: "052 504-506", href: "tel:+35952504506" },
    { label: "0888 745448", href: "tel:+359888745448" },
    { label: "0877 969303", href: "tel:+359877969303" },
  ],
  email: "office@naturela-bg.com",
  map: { lat: 43.237199, lng: 27.877336 },
} as const;

export const mapEmbed = `https://maps.google.com/maps?q=${contact.map.lat},${contact.map.lng}&z=16&hl=bg&output=embed`;

/** One device per product line, rotated in the hero. */
export const showcaseIds = ["56", "53", "52", "23"];

export const clients = Array.from({ length: 10 }, (_, i) => `/n/client${i + 1}.png`);

export const stats: { value: string; key: "founded" | "posts" | "lines" | "local" }[] = [
  { value: "1994", key: "founded" },
  { value: "702 000+", key: "posts" },
  { value: "5", key: "lines" },
  { value: "100%", key: "local" },
];

/** Homepage news blocks, as they appear on the current site. */
export const highlights: {
  tag: L<string>;
  title: L<string>;
  text: L<string>;
  img: string;
  to: (lang: Lang) => string;
  external?: boolean;
}[] = [
  {
    tag: { bg: "Ново", en: "New" },
    title: {
      bg: 'NRC-8 с 3.5" IPS touch дисплей',
      en: 'NRC-8 with a 3.5" IPS touch display',
    },
    text: {
      bg: "Новото поколение контролер за пелетни горелки — сензорен цветен дисплей и изцяло преработено меню за настройки.",
      en: "The new generation of pellet burner controller — a colour touch display and a completely reworked settings menu.",
    },
    img: "/n/nrc8.jpg",
    to: (lang) =>
      `/${lang}/product/56-0-npbc-v6t-noviyat-kontroler-za-peletni-gorelki-s-35-touch-displei/`,
  },
  {
    tag: { bg: "Платформа", en: "Platform" },
    title: { bg: "Naturela Smart Home", en: "Naturela Smart Home" },
    text: {
      bg: "Web базирана система за дистанционен мониторинг и управление през Интернет на всички контролери, съвместими с нашите WiFi модули.",
      en: "A web based system for remote monitoring and control over the Internet of every controller compatible with our WiFi modules.",
    },
    img: "/n/smarthome.png",
    to: () => `${OLD_SITE}/files/Nat_Smarthome_BG.pdf`,
    external: true,
  },
];

/** Company story, transcribed from the homepage of the current site. */
export const about: L<string[]> = {
  bg: [
    "„НАТУРЕЛА“ е тази компания, която през далечната 1994 година се захвана с нелеката задача да модернизира остаряващата комуникационна техника на БТК („Българска Телекомуникационна Компания“, днес VIVACOM). През онези трудни години искахме да подобрим решително надеждността на телефонните връзки и качеството на обслужване на абонатите.",
    "Днес с гордост можем да заявим, че ние сме тези, които създадоха и монтираха в над 702 000 телефонни поста в България системата за компютъризирано таксуване RITA-V2. Тя дълги години прецизно отчиташе всеки проведен телефонен разговор и помагаше на техническия екип да отстранява много от повредите.",
    "Днес продължаваме да създаваме още иновативни продукти, предназначени да променят и улеснят живота на много хора — да ви спестят излишни разходи и да ви накарат да се чудите как сте живели, когато тях ги е нямало.",
  ],
  en: [
    "NATURELA is the company that back in 1994 took on the demanding task of modernising the ageing communication equipment of BTC (the Bulgarian Telecommunication Company, today VIVACOM). In those difficult years we set out to decisively improve the reliability of telephone connections and the quality of subscriber service.",
    "Today we can proudly state that we are the people who created and installed the RITA-V2 computerised billing system in more than 702 000 telephone posts in Bulgaria. For many years it precisely accounted for every telephone call and helped the technical team locate and remove many faults.",
    "Today we continue to create innovative products meant to change and ease the lives of many people — to save you unnecessary costs and to make you wonder how you ever lived without them.",
  ],
};

export const aboutTitle: L<string> = {
  bg: "„НАТУРЕЛА“ — три десетилетия българска електроника",
  en: "NATURELA — three decades of Bulgarian electronics",
};
