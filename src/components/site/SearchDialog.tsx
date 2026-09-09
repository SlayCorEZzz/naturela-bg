import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";

import { categories, type Lang, type Product } from "../../data/catalog";
import { defaultResults, searchProducts } from "../../lib/search";
import { translator } from "../../lib/i18n";

interface Props {
  lang: Lang;
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({ lang, open, onClose }: Props) {
  const tr = translator(lang);
  const [q, setQ] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    setQ("");
    const id = window.setTimeout(() => inputRef.current?.focus(), 30);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(id);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const typed = q.trim().length > 0;
  const results = useMemo(
    () => (typed ? searchProducts(q, lang) : defaultResults()),
    [q, lang, typed],
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label={tr("nav.close")}
        onClick={onClose}
        className="fade-in absolute inset-0 h-full w-full cursor-default bg-ink/70 backdrop-blur-sm"
      />
      <div className="drawer-in relative mt-[5vh] flex max-h-[86vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-border bg-popover shadow-[var(--shadow-lift)]">
        <div className="flex items-center gap-3 border-b border-border px-4 py-3 sm:px-5">
          <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={tr("search.placeholder")}
            aria-label={tr("search.label")}
            className="min-w-0 flex-1 bg-transparent py-2 text-base outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={tr("nav.close")}
            className="grid size-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <X className="size-4" aria-hidden />
          </button>
        </div>

        <div className="thin-scroll overflow-y-auto">
          <p className="px-5 pb-1 pt-4 text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            {typed ? `${results.length} ${tr("search.results")}` : tr("search.popular")}
          </p>

          {typed && results.length === 0 ? (
            <p className="px-5 py-10 text-center text-sm text-muted-foreground">
              {tr("search.empty")}
            </p>
          ) : (
            <div className="p-2">
              {results.map((p) => (
                <ResultRow key={p.id} product={p} lang={lang} onNavigate={onClose} />
              ))}
            </div>
          )}

          {!typed && (
            <div className="border-t border-border px-5 py-4">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
                {tr("search.browse")}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <Link
                    key={c.key}
                    to="/$lang/products/$slug/"
                    params={{ lang, slug: c.slug[lang] }}
                    onClick={onClose}
                    className="rounded-full border border-border px-3.5 py-1.5 text-[0.78rem] font-bold text-muted-foreground transition-colors hover:border-brand hover:text-brand"
                  >
                    {c.title[lang]}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-border bg-surface px-5 py-3">
          <p className="text-xs font-semibold text-muted-foreground">{tr("search.hint")}</p>
          <Link
            to="/$lang/products/"
            params={{ lang }}
            onClick={onClose}
            className="shrink-0 text-xs font-bold text-brand hover:underline"
          >
            {tr("nav.allProducts")} →
          </Link>
        </div>
      </div>
    </div>
  );
}

function ResultRow({
  product,
  lang,
  onNavigate,
}: {
  product: Product;
  lang: Lang;
  onNavigate: () => void;
}) {
  const cat = categories.find((c) => c.slug[lang] === product.cat[lang]);

  return (
    <Link
      to="/$lang/product/$slug/"
      params={{ lang, slug: product.slug }}
      onClick={onNavigate}
      className="flex items-center gap-3.5 rounded-2xl p-2.5 transition-colors hover:bg-muted"
    >
      <span className="grid size-14 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-white">
        {product.card ? (
          <img src={product.card} alt="" loading="lazy" className="size-full object-contain p-1" />
        ) : null}
      </span>
      <span className="min-w-0 flex-1">
        {product.model && (
          <span className="block text-[0.66rem] font-extrabold uppercase tracking-wider text-brand">
            {product.model}
          </span>
        )}
        <span className="block truncate text-sm font-bold text-foreground">
          {product.title[lang]}
        </span>
        <span className="mt-0.5 block truncate text-xs font-semibold text-muted-foreground">
          {cat?.title[lang] ?? ""}
        </span>
      </span>
    </Link>
  );
}
