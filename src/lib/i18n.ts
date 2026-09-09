import type { Lang } from "../data/catalog";

export type { Lang };

export const LANGS: Lang[] = ["bg", "en"];

export const isLang = (v: unknown): v is Lang => v === "bg" || v === "en";

/** Old URLs are language-prefixed and end in a slash — both are preserved. */
export const path = (lang: Lang, rest = ""): string =>
  `/${lang}/${rest.replace(/^\/+/, "")}`.replace(/\/*$/, "/");

const dict = {
  bg: {
    "nav.home": "Начало",
    "nav.about": "За нас",
    "nav.products": "Продукти",
    "nav.useful": "Полезно",
    "nav.contacts": "Контакти",
    "nav.allProducts": "Всички продукти",
    "nav.categories": "Категории продукти",
    "nav.menu": "Меню",
    "nav.open": "Отвори менюто",
    "nav.close": "Затвори менюто",

    "search.label": "Търсене",
    "search.placeholder": "Търси продукт или модел…",
    "search.empty": "Няма намерени продукти.",
    "search.hint": "Пишете, за да търсите сред всички продукти",
    "search.popular": "Най-нови продукти",
    "search.browse": "Разгледай по категория",
    "search.results": "резултата",

    "home.eyebrow": "Варна · от 1994 година",
    "home.heroTitle": "Днес създаваме тези продукти и решения, чиято липса ще бъде",
    "home.heroTitleAccent": "немислима утре",
    "home.heroLead":
      "Интелигентни електронни системи и устройства: контролери за пелетни горелки и котли, терморегулатори за бойлери и отоплителни уреди, мониторинг на фотоволтаични централи.",
    "home.ctaProducts": "Разгледай продуктите",
    "home.ctaContact": "Свържи се с нас",
    "home.catsEyebrow": "Категории продукти",
    "home.catsTitle": "Електроника за всяка отоплителна система",
    "home.newsEyebrow": "Новости",
    "home.newsTitle": "Последни разработки",
    "home.featuredEyebrow": "Подбрани продукти",
    "home.featuredTitle": "Най-новите ни устройства",
    "home.aboutEyebrow": "За нас",
    "home.clientsEyebrow": "Нашите клиенти",
    "home.clientsTitle": "Доверяват ни се",
    "home.readMore": "Прочетете още",
    "home.moreAbout": "Повече за компанията",

    "stat.founded": "година основана",
    "stat.posts": "телефонни поста с RITA-V2",
    "stat.lines": "продуктови направления",
    "stat.local": "разработка в България",

    "cat.view": "Виж продуктите",
    "cat.count": "продукта",
    "cat.count1": "продукт",

    "product.inquiry": "Направи запитване за този продукт",
    "product.docs": "Документация за сваляне",
    "product.related": "Свързани продукти",
    "product.gallery": "Галерия",
    "product.details": "Описание",
    "product.back": "Назад към категорията",
    "product.noDocs": "За този продукт няма публикувана документация.",

    "products.title": "Всички продукти",
    "products.lead":
      "Пълният каталог на Натурела — контролери, терморегулатори и системи за мониторинг.",
    "products.filterAll": "Всички",
    "products.found": "намерени продукта",
    "products.none": "Няма продукти, отговарящи на търсенето.",
    "products.clear": "Изчисти",

    "useful.title": "Полезно",
    "useful.lead": "Статии, изпитания и обяснения защо електронното управление има значение.",

    "contacts.title": "Контакти",
    "contacts.lead": "Свържете се с нас за запитване, оферта или техническа консултация.",
    "contacts.form": "Запитване",
    "contacts.name": "Име",
    "contacts.email": "Е-поща",
    "contacts.phone": "Телефон",
    "contacts.subject": "Относно",
    "contacts.message": "Съобщение",
    "contacts.send": "Изпрати запитване",
    "contacts.sending": "Изпраща се…",
    "contacts.required": "Моля, попълнете име, е-поща и съобщение.",
    "contacts.mailtoNote": "Формата отваря вашата пощенска програма с попълнено запитване.",
    "contacts.address": "Адрес",
    "contacts.phones": "Телефони",
    "contacts.mail": "Е-поща",
    "contacts.map": "Карта",
    "contacts.about": "Запитване за",

    "footer.rights": "Всички права запазени.",
    "footer.terms": "Условия за ползване",
    "footer.privacy": "Защита на личните данни",
    "footer.tagline":
      "Днес ние създаваме тези продукти и решения, чиято липса ще бъде немислима утре!",

    "crumb.home": "Начало",
    "crumb.products": "Продукти",
    skip: "Към съдържанието",
    toTop: "Нагоре",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About us",
    "nav.products": "Products",
    "nav.useful": "Useful",
    "nav.contacts": "Contacts",
    "nav.allProducts": "All products",
    "nav.categories": "Product categories",
    "nav.menu": "Menu",
    "nav.open": "Open menu",
    "nav.close": "Close menu",

    "search.label": "Search",
    "search.placeholder": "Search a product or model…",
    "search.empty": "No products found.",
    "search.hint": "Start typing to search all products",
    "search.popular": "Latest products",
    "search.browse": "Browse by category",
    "search.results": "results",

    "home.eyebrow": "Varna, Bulgaria · since 1994",
    "home.heroTitle": "Today we create the products whose absence will be",
    "home.heroTitleAccent": "unthinkable tomorrow",
    "home.heroLead":
      "Intelligent electronic systems and devices: controllers for pellet burners and boilers, thermoregulators for water heaters and heating appliances, monitoring for photovoltaic power plants.",
    "home.ctaProducts": "Browse the products",
    "home.ctaContact": "Get in touch",
    "home.catsEyebrow": "Product categories",
    "home.catsTitle": "Electronics for every heating system",
    "home.newsEyebrow": "What's new",
    "home.newsTitle": "Latest developments",
    "home.featuredEyebrow": "Selected products",
    "home.featuredTitle": "Our newest devices",
    "home.aboutEyebrow": "About us",
    "home.clientsEyebrow": "Our clients",
    "home.clientsTitle": "They trust us",
    "home.readMore": "Read more",
    "home.moreAbout": "More about the company",

    "stat.founded": "founded",
    "stat.posts": "telephone posts with RITA-V2",
    "stat.lines": "product lines",
    "stat.local": "engineered in Bulgaria",

    "cat.view": "View products",
    "cat.count": "products",
    "cat.count1": "product",

    "product.inquiry": "Make an inquiry about this product",
    "product.docs": "Documentation for download",
    "product.related": "Related products",
    "product.gallery": "Gallery",
    "product.details": "Description",
    "product.back": "Back to the category",
    "product.noDocs": "No documentation has been published for this product.",

    "products.title": "All products",
    "products.lead":
      "The full Naturela catalogue — controllers, thermoregulators and monitoring systems.",
    "products.filterAll": "All",
    "products.found": "products found",
    "products.none": "No products match your search.",
    "products.clear": "Clear",

    "useful.title": "Useful",
    "useful.lead": "Articles, test results and the reasons electronic control matters.",

    "contacts.title": "Contacts",
    "contacts.lead": "Contact us for an inquiry, a quote or technical advice.",
    "contacts.form": "Inquiry",
    "contacts.name": "Name",
    "contacts.email": "E-mail",
    "contacts.phone": "Phone",
    "contacts.subject": "Subject",
    "contacts.message": "Message",
    "contacts.send": "Send inquiry",
    "contacts.sending": "Sending…",
    "contacts.required": "Please fill in name, e-mail and message.",
    "contacts.mailtoNote": "The form opens your mail client with the inquiry prepared.",
    "contacts.address": "Address",
    "contacts.phones": "Phones",
    "contacts.mail": "E-mail",
    "contacts.map": "Map",
    "contacts.about": "Inquiry about",

    "footer.rights": "All rights reserved.",
    "footer.terms": "Terms of agreement",
    "footer.privacy": "Privacy policy",
    "footer.tagline":
      "Today we create the products and solutions whose absence will be unthinkable tomorrow!",

    "crumb.home": "Home",
    "crumb.products": "Products",
    skip: "Skip to content",
    toTop: "Back to top",
  },
} as const;

export type TKey = keyof (typeof dict)["bg"];

export const t = (lang: Lang, key: TKey): string => dict[lang][key] ?? dict.bg[key];

/** Bound translator, so components read `tr("nav.home")`. */
export const translator = (lang: Lang) => (key: TKey) => t(lang, key);
