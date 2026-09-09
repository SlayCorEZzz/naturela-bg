import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "../../../components/site/PageHero";
import { categories, productsOf } from "../../../data/catalog";
import { isLang, translator, type Lang } from "../../../lib/i18n";
import { seo } from "../../../lib/seo";

export const Route = createFileRoute("/$lang/kategorii/")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  head: ({ params }) => {
    const lang = (params.lang === "en" ? "en" : "bg") as Lang;
    return seo({
      lang,
      title: lang === "bg" ? "Категории продукти | Натурела" : "Product categories | Naturela",
      description:
        lang === "bg"
          ? "Петте продуктови направления на Натурела: контролери за пелетни горелки и котли, терморегулатори за бойлери, контролери за отоплителни уреди, мониторинг на фотоволтаични централи."
          : "The Naturela product lines: controllers for pellet burners and boilers, thermoregulators for water heaters, controllers for heating appliances, photovoltaic monitoring.",
      path: `/${lang}/kategorii/`,
      altPath: `/${lang === "bg" ? "en" : "bg"}/kategorii/`,
    });
  },
  component: CategoriesPage,
});

function CategoriesPage() {
  const { lang: rawLang } = Route.useParams();
  const lang = rawLang as Lang;
  const tr = translator(lang);

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={tr("nav.products")}
        title={tr("nav.categories")}
        lead={tr("home.catsTitle")}
        crumbs={[{ label: tr("nav.categories") }]}
      />

      <section className="shell py-12 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => {
            const items = productsOf(c);
            return (
              <Link
                key={c.key}
                to="/$lang/products/$slug/"
                params={{ lang, slug: c.slug[lang] }}
                className="surface-card group flex min-w-0 flex-col p-6 sm:p-7"
              >
                <div className="flex h-20 items-center">
                  <img
                    src={c.icon}
                    alt=""
                    loading="lazy"
                    className="max-h-20 w-auto transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="mt-5 text-[1.05rem] font-bold leading-snug">{c.title[lang]}</h2>
                <p className="mt-2 text-sm font-semibold text-muted-foreground">
                  {items.length} {items.length === 1 ? tr("cat.count1") : tr("cat.count")}
                </p>
                <ul className="mt-4 min-w-0 space-y-1.5 text-sm text-muted-foreground">
                  {items.slice(0, 3).map((p) => (
                    <li key={p.id} className="truncate">
                      · {p.model || p.title[lang]}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                  {tr("cat.view")}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
