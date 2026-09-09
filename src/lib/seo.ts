import type { Lang } from "./i18n";

export const SITE_URL = "https://www.naturela-bg.com";

interface SeoInput {
  lang: Lang;
  title: string;
  description?: string | undefined;
  path: string;
  image?: string | undefined;
  /** Same page in the other language, when the slug differs. */
  altPath?: string | undefined;
}

/**
 * Route `head()` payload: title/description, Open Graph, canonical and the
 * hreflang pair, so the bilingual URLs of the old site stay indexable.
 */
export function seo({ lang, title, description, path, image, altPath }: SeoInput) {
  const url = SITE_URL + path;
  const other: Lang = lang === "bg" ? "en" : "bg";
  const alt = altPath ? SITE_URL + altPath : null;

  return {
    meta: [
      { title },
      ...(description ? [{ name: "description", content: description }] : []),
      { property: "og:title", content: title },
      ...(description ? [{ property: "og:description", content: description }] : []),
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:locale", content: lang === "bg" ? "bg_BG" : "en_US" },
      ...(image ? [{ property: "og:image", content: SITE_URL + image }] : []),
      { name: "twitter:card", content: image ? "summary_large_image" : "summary" },
      { name: "twitter:title", content: title },
      ...(description ? [{ name: "twitter:description", content: description }] : []),
    ],
    links: [
      { rel: "canonical", href: url },
      { rel: "alternate", hrefLang: lang, href: url },
      ...(alt ? [{ rel: "alternate", hrefLang: other, href: alt }] : []),
    ],
  };
}
