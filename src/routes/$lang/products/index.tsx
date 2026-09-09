import { createFileRoute, notFound, useNavigate } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";

import { PageHero } from "../../../components/site/PageHero";
import { ProductCard } from "../../../components/site/ProductCard";

import { categories, products, type Category } from "../../../data/catalog";
import { isLang, translator, type Lang } from "../../../lib/i18n";
import { searchProducts } from "../../../lib/search";
import { seo } from "../../../lib/seo";
import { cn } from "../../../lib/utils";

/** `?word=` is the query key the previous site used for its header search. */
interface ProductSearch {
  word?: string | undefined;
  cat?: string | undefined;
}

export const Route = createFileRoute("/$lang/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => ({
    word: typeof search["word"] === "string" && search["word"] ? search["word"] : undefined,
    cat: typeof search["cat"] === "string" && search["cat"] ? search["cat"] : undefined,
  }),
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  head: ({ params }) => {
    const lang = (params.lang === "en" ? "en" : "bg") as Lang;
    return seo({
      lang,
      title: lang === "bg" ? "Всички продукти | Натурела" : "All products | Naturela",
      description:
        lang === "bg"
          ? "Пълният каталог на Натурела — контролери за пелетни горелки и котли, терморегулатори за бойлери, системи за мониторинг на фотоволтаични централи."
          : "The complete Naturela catalogue — controllers for pellet burners and boilers, thermoregulators for water heaters, photovoltaic monitoring systems.",
      path: `/${lang}/products/`,
      altPath: `/${lang === "bg" ? "en" : "bg"}/products/`,
    });
  },
  component: AllProducts,
});

function AllProducts() {
  const { lang: rawLang } = Route.useParams();
  const lang = rawLang as Lang;
  const tr = translator(lang);
  const { word, cat } = Route.useSearch();
  const navigate = useNavigate({ from: "/$lang/products/" });
  const [query, setQuery] = useState(word ?? "");

  const setSearch = (next: ProductSearch) =>
    navigate({ search: (prev: ProductSearch) => ({ ...prev, ...next }), replace: true });

  const activeCat: Category | undefined = categories.find((c) => c.key === cat);

  const list = useMemo(() => {
    let base = query.trim() ? searchProducts(query, lang) : products;
    if (activeCat) base = base.filter((p) => activeCat.products.includes(p.id));
    return base;
  }, [query, lang, activeCat]);

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={tr("nav.products")}
        title={tr("products.title")}
        lead={tr("products.lead")}
        crumbs={[{ label: tr("crumb.products") }]}
      />

      <section className="shell py-10 sm:py-14">
        <div className="flex flex-col gap-5">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <input
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setSearch({ word: e.target.value || undefined });
              }}
              placeholder={tr("search.placeholder")}
              aria-label={tr("search.label")}
              className="w-full rounded-2xl border border-border bg-card py-3.5 pl-12 pr-11 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-brand"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setSearch({ word: undefined });
                }}
                aria-label={tr("products.clear")}
                className="absolute right-3 top-1/2 grid size-8 -translate-y-1/2 place-items-center rounded-full text-muted-foreground transition-colors hover:text-brand"
              >
                <X className="size-4" aria-hidden />
              </button>
            )}
          </div>

          <div className="thin-scroll -mx-1 flex gap-2 overflow-x-auto px-1 pb-2 lg:flex-wrap lg:overflow-visible">
            <FilterChip active={!cat} onClick={() => setSearch({ cat: undefined })}>
              {tr("products.filterAll")}
            </FilterChip>
            {categories.map((c) => (
              <FilterChip
                key={c.key}
                active={cat === c.key}
                onClick={() => setSearch({ cat: cat === c.key ? undefined : c.key })}
              >
                {c.title[lang]}
              </FilterChip>
            ))}
          </div>

          <p className="text-sm font-semibold text-muted-foreground">
            {list.length} {tr("products.found")}
          </p>
        </div>

        {list.length === 0 ? (
          <p className="rounded-3xl border border-dashed border-border py-16 text-center text-muted-foreground">
            {tr("products.none")}
          </p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.id} product={p} lang={lang} showCategory />
            ))}
          </div>
        )}
      </section>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "shrink-0 rounded-full border px-4 py-2 text-[0.8rem] font-bold transition-colors",
        active
          ? "border-brand bg-brand text-white"
          : "border-border text-muted-foreground hover:border-brand hover:text-brand",
      )}
    >
      {children}
    </button>
  );
}
