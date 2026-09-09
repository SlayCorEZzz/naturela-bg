import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { categories, type Lang, type Product } from "../../data/catalog";

export function ProductCard({
  product,
  lang,
  showCategory = false,
}: {
  product: Product;
  lang: Lang;
  showCategory?: boolean;
}) {
  const cat = categories.find((c) => c.slug[lang] === product.cat[lang]);

  return (
    <Link
      to="/$lang/product/$slug/"
      params={{ lang, slug: product.slug }}
      className="surface-card group flex min-w-0 flex-col overflow-hidden"
    >
      {/* contain, not cover: half the catalogue is wiring diagrams, and cropping
          one loses exactly the detail an installer opened the page for */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-white">
        {product.card ? (
          <img
            src={product.card}
            alt={product.title[lang]}
            loading="lazy"
            className="size-full object-contain p-3 transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="grid size-full place-items-center text-sm text-muted-foreground">
            Naturela
          </div>
        )}
        {product.model && (
          <span className="absolute left-3 top-3 rounded-full bg-ink/85 px-2.5 py-1 text-[0.68rem] font-extrabold uppercase tracking-wider text-white backdrop-blur">
            {product.model}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        {showCategory && cat && (
          <p className="mb-2 text-[0.7rem] font-bold uppercase tracking-wider text-brand">
            {cat.title[lang]}
          </p>
        )}
        <h3 className="text-[0.98rem] font-bold leading-snug text-foreground">
          {product.title[lang]}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {product.excerpt[lang]}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 pt-1 text-sm font-bold text-brand">
          {lang === "bg" ? "Виж продукта" : "View product"}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
