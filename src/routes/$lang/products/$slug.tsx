import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs } from "../../../components/site/Breadcrumbs";
import { ProductCard } from "../../../components/site/ProductCard";
import { categories, categoryBySlug, productsOf } from "../../../data/catalog";
import { isLang, translator, type Lang } from "../../../lib/i18n";
import { seo } from "../../../lib/seo";

export const Route = createFileRoute("/$lang/products/$slug")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
    if (!categoryBySlug(params.slug, params.lang)) throw notFound();
  },
  head: ({ params }) => {
    const lang = (params.lang === "en" ? "en" : "bg") as Lang;
    const c = categoryBySlug(params.slug, lang);
    if (!c) return {};
    const n = productsOf(c).length;
    return seo({
      lang,
      title: `${c.title[lang]} | Naturela`,
      description:
        lang === "bg"
          ? `${c.title[lang]} — ${n} продукта от производствената програма на Натурела.`
          : `${c.title[lang]} — ${n} products from the Naturela range.`,
      path: `/${lang}/products/${c.slug[lang]}/`,
      altPath: `/${lang === "bg" ? "en" : "bg"}/products/${c.slug[lang === "bg" ? "en" : "bg"]}/`,
      image: c.icon,
    });
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { lang: rawLang, slug } = Route.useParams();
  const lang = rawLang as Lang;
  const tr = translator(lang);
  const category = categoryBySlug(slug, lang)!;
  const items = productsOf(category);
  /* the newest id in the line is the flagship — and the one with studio photography,
     rather than the wiring diagram an older listing thumbnail points at */
  const lead = items.reduce<(typeof items)[number] | undefined>(
    (best, p) => (!best || Number(p.id) > Number(best.id) ? p : best),
    undefined,
  );
  const rest = items.filter((p) => p.id !== lead?.id);

  return (
    <>
      {/* The newest device in the line carries the header, shown large on white —
          the same treatment as the home page, so the two read as one system. */}
      <section className="border-b border-border bg-background">
        <div className="shell grid items-center gap-9 py-10 sm:py-12 lg:grid-cols-[1fr_1fr] lg:gap-14 lg:py-16">
          <div className="min-w-0">
            <Breadcrumbs
              lang={lang}
              items={[
                { label: tr("crumb.products"), to: "/$lang/products/", params: { lang } },
                { label: category.title[lang] },
              ]}
            />
            <p className="eyebrow mt-5">
              <span className="h-px w-6 bg-brand" aria-hidden />
              {tr("nav.categories")}
            </p>
            <h1 className="title-xl mt-3 text-ink">{category.title[lang]}</h1>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-bold text-foreground">
                {items.length} {items.length === 1 ? tr("cat.count1") : tr("cat.count")}
              </span>
              <Link to="/$lang/products/" params={{ lang }} className="btn-ghost">
                {tr("nav.allProducts")}
              </Link>
            </div>
          </div>

          {lead && (
            <div className="min-w-0">
              <Link
                to="/$lang/product/$slug/"
                params={{ lang, slug: lead.slug }}
                className="block rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] transition-colors hover:border-brand/50 sm:p-5"
              >
                <div className="overflow-hidden rounded-2xl bg-white">
                  <img
                    src={lead.card ?? ""}
                    alt={lead.title[lang]}
                    className="aspect-[4/3] w-full object-contain"
                  />
                </div>
                <div className="px-1.5 pb-1 pt-4">
                  {lead.model && (
                    <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-brand">
                      {lead.model}
                    </span>
                  )}
                  <p className="mt-1.5 line-clamp-2 text-[0.95rem] font-bold leading-snug text-foreground">
                    {lead.title[lang]}
                  </p>
                </div>
              </Link>

              {rest.length > 0 && (
                <div className="thin-scroll -mx-1 mt-4 flex gap-2.5 overflow-x-auto px-1">
                  {rest.slice(0, 5).map((p) => (
                    <Link
                      key={p.id}
                      to="/$lang/product/$slug/"
                      params={{ lang, slug: p.slug }}
                      aria-label={p.title[lang]}
                      className="size-16 shrink-0 overflow-hidden rounded-xl border border-border bg-card p-1 transition-colors hover:border-brand sm:size-[4.5rem]"
                    >
                      <img
                        src={p.card ?? ""}
                        alt=""
                        loading="lazy"
                        className="size-full object-contain"
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="shell py-12 sm:py-16">
        <div className="thin-scroll -mx-1 mb-9 flex gap-2 overflow-x-auto px-1 pb-2 lg:flex-wrap lg:overflow-visible">
          {categories.map((c) => (
            <Link
              key={c.key}
              to="/$lang/products/$slug/"
              params={{ lang, slug: c.slug[lang] }}
              className="shrink-0 rounded-full border border-border px-4 py-2 text-[0.8rem] font-bold text-muted-foreground transition-colors hover:border-brand hover:text-brand"
              activeProps={{ className: "!border-brand bg-brand !text-white" }}
            >
              {c.title[lang]}
            </Link>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} lang={lang} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/$lang/contacts/" params={{ lang }} className="btn-primary">
            {tr("home.ctaContact")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </>
  );
}
