import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Mail, MapPin, Menu, Phone, Search, X } from "lucide-react";

import { categories, productsOf, type Lang } from "../../data/catalog";
import { contact } from "../../data/site";
import { translator } from "../../lib/i18n";
import { cn } from "../../lib/utils";
import { SearchDialog } from "./SearchDialog";

interface Props {
  lang: Lang;
}

export function Header({ lang }: Props) {
  const tr = translator(lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const megaId = useId();
  const megaRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // any navigation closes every overlay
  useEffect(() => {
    setMenuOpen(false);
    setMegaOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  // the mobile drawer owns the viewport while it is open
  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMegaOpen(false);
      }
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: MouseEvent) => {
      if (!megaRef.current?.contains(e.target as Node)) setMegaOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [megaOpen]);

  const hoverOpen = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const hoverClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMegaOpen(false), 140);
  };

  const linkBase = "relative rounded-full px-3.5 py-2 text-[0.9rem] font-bold transition-colors";
  const linkTone = "text-foreground/70 hover:text-brand";

  return (
    <>
      {/* utility strip — scrolls away, desktop only */}
      <div className="hidden border-b border-border bg-surface lg:block">
        <div className="shell flex h-10 items-center justify-between text-[0.78rem]">
          <div className="flex items-center gap-6 text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-brand" aria-hidden />
              {contact.city[lang]}, {contact.street[lang]}
            </span>
            <a
              className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-brand"
              href={`mailto:${contact.email}`}
            >
              <Mail className="size-3.5 text-brand" aria-hidden />
              {contact.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              className="inline-flex items-center gap-1.5 font-semibold text-foreground transition-colors hover:text-brand"
              href={contact.phones[0].href}
            >
              <Phone className="size-3.5 text-brand" aria-hidden />
              {contact.phones[0].label}
            </a>
            <LangSwitch lang={lang} />
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/85 shadow-[0_1px_0_rgb(12_20_36/0.04),0_10px_30px_-24px_rgb(12_20_36/0.4)] backdrop-blur-xl">
        <div className="shell flex h-[var(--header-h)] items-center gap-3">
          <Link to="/$lang/" params={{ lang }} className="shrink-0" aria-label="Naturela">
            {/* the ink master of the mark; the white one is for dark grounds */}
            <img
              src="/n/logo-ink.png"
              alt="Naturela Electronics"
              width={436}
              height={79}
              className="h-8 w-auto sm:h-9"
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
            <Link
              to="/$lang/"
              params={{ lang }}
              activeOptions={{ exact: true }}
              className={cn(linkBase, linkTone)}
              activeProps={{ className: "text-brand" }}
            >
              {tr("nav.home")}
            </Link>
            <Link
              to="/$lang/pages/$slug/"
              params={{ lang, slug: lang === "bg" ? "naturela-varna" : "naturela-varna" }}
              className={cn(linkBase, linkTone)}
              activeProps={{ className: "text-brand" }}
            >
              {tr("nav.about")}
            </Link>

            {/* Hover (or keyboard focus) reveals the categories; the trigger itself
                still navigates to the overview page, as it did on the old site. */}
            <div
              className="relative"
              ref={megaRef}
              onMouseEnter={hoverOpen}
              onMouseLeave={hoverClose}
              onFocus={hoverOpen}
              onBlur={hoverClose}
            >
              <Link
                to="/$lang/kategorii/"
                params={{ lang }}
                aria-expanded={megaOpen}
                aria-controls={megaId}
                className={cn(linkBase, linkTone, "inline-flex items-center gap-1")}
                activeProps={{ className: "text-brand" }}
              >
                {tr("nav.products")}
                <ChevronDown
                  className={cn("size-4 transition-transform", megaOpen && "rotate-180")}
                  aria-hidden
                />
              </Link>

              {megaOpen && (
                <div
                  id={megaId}
                  className="drawer-in absolute left-1/2 top-[calc(100%+0.6rem)] w-[min(58rem,90vw)] -translate-x-1/2 overflow-hidden rounded-3xl border border-border bg-popover shadow-[var(--shadow-lift)]"
                >
                  <div className="grid gap-1 p-3 sm:grid-cols-2">
                    {categories.map((c) => {
                      const n = productsOf(c).length;
                      return (
                        <Link
                          key={c.key}
                          to="/$lang/products/$slug/"
                          params={{ lang, slug: c.slug[lang] }}
                          className="group flex items-start gap-3.5 rounded-2xl p-3 transition-colors hover:bg-muted"
                        >
                          <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-border bg-surface p-1.5">
                            <img src={c.icon} alt="" className="max-h-8 w-auto" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[0.92rem] font-bold leading-snug text-foreground group-hover:text-brand">
                              {c.title[lang]}
                            </span>
                            <span className="mt-0.5 block text-xs font-semibold text-muted-foreground">
                              {n} {n === 1 ? tr("cat.count1") : tr("cat.count")}
                            </span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="flex items-center justify-between gap-3 border-t border-border bg-surface px-5 py-3.5">
                    <p className="text-xs font-semibold text-muted-foreground">
                      {tr("search.hint")}
                    </p>
                    <Link
                      to="/$lang/products/"
                      params={{ lang }}
                      className="text-sm font-bold text-brand hover:underline"
                    >
                      {tr("nav.allProducts")} →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/$lang/useful/"
              params={{ lang }}
              className={cn(linkBase, linkTone)}
              activeProps={{ className: "text-brand" }}
            >
              {tr("nav.useful")}
            </Link>
            <Link
              to="/$lang/contacts/"
              params={{ lang }}
              className={cn(linkBase, linkTone)}
              activeProps={{ className: "text-brand" }}
            >
              {tr("nav.contacts")}
            </Link>
          </nav>

          <div className="ml-auto flex items-center gap-1.5 lg:ml-3">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              aria-label={tr("search.label")}
              className="grid size-10 place-items-center rounded-full border border-border text-foreground/70 transition-colors hover:border-brand hover:text-brand"
            >
              <Search className="size-[1.05rem]" aria-hidden />
            </button>

            <a
              href={contact.phones[0].href}
              className="btn-primary hidden h-10 !px-5 !py-0 sm:inline-flex"
            >
              <Phone className="size-4" aria-hidden />
              {contact.phones[0].label}
            </a>

            {/* below 400px the bar is logo + search + burger only; the drawer
                carries the language switch */}
            <div className="hidden min-[400px]:block lg:hidden">
              <LangSwitch lang={lang} />
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={tr("nav.open")}
              aria-expanded={menuOpen}
              className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand lg:hidden"
            >
              <Menu className="size-5" aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <MobileDrawer lang={lang} onClose={() => setMenuOpen(false)} />}
      <SearchDialog lang={lang} open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

/* ------------------------------------------------------------------ */

function LangSwitch({ lang }: { lang: Lang }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  /* Category and article slugs differ per language, so only swap the prefix when
     the rest of the path is language-neutral; otherwise land on that home page. */
  const other: Lang = lang === "bg" ? "en" : "bg";
  const neutral = /^\/(bg|en)\/(product\/|products\/?$|contacts|kategorii|useful\/?$)/.test(
    pathname,
  );
  const href = neutral ? pathname.replace(/^\/(bg|en)/, `/${other}`) : `/${other}/`;

  const base =
    "rounded-full px-2 py-0.5 text-[0.72rem] font-extrabold uppercase tracking-wider transition-colors";
  const palette = { on: "bg-muted text-brand", off: "text-muted-foreground hover:text-brand" };

  return (
    <div className="flex items-center gap-0.5 rounded-full border border-border p-0.5">
      <span className={cn(base, palette.on)}>{lang}</span>
      <a href={href} className={cn(base, palette.off)} hrefLang={other}>
        {other}
      </a>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function MobileDrawer({ lang, onClose }: { lang: Lang; onClose: () => void }) {
  const tr = translator(lang);
  const [catsOpen, setCatsOpen] = useState(true);

  return (
    <div className="fixed inset-0 z-[60] lg:hidden" role="dialog" aria-modal="true">
      <button
        aria-label={tr("nav.close")}
        onClick={onClose}
        className="fade-in absolute inset-0 h-full w-full cursor-default bg-ink/70 backdrop-blur-sm"
      />
      <div className="drawer-in thin-scroll absolute inset-y-0 right-0 flex w-[min(23rem,92vw)] flex-col overflow-y-auto bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <img src="/n/logo-ink.png" alt="Naturela" className="h-8 w-auto" />
          <button
            type="button"
            onClick={onClose}
            aria-label={tr("nav.close")}
            className="grid size-10 place-items-center rounded-full border border-border text-foreground transition-colors hover:border-brand hover:text-brand"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>

        <nav className="flex flex-col gap-1 px-3 py-2">
          <DrawerLink to="/$lang/" params={{ lang }} exact>
            {tr("nav.home")}
          </DrawerLink>
          <DrawerLink to="/$lang/pages/$slug/" params={{ lang, slug: "naturela-varna" }}>
            {tr("nav.about")}
          </DrawerLink>

          <button
            type="button"
            onClick={() => setCatsOpen((v) => !v)}
            aria-expanded={catsOpen}
            className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-lg font-bold text-ink transition-colors hover:bg-muted"
          >
            {tr("nav.products")}
            <ChevronDown
              className={cn("size-5 transition-transform", catsOpen && "rotate-180")}
              aria-hidden
            />
          </button>
          {catsOpen && (
            <div className="mb-1 ml-2 flex flex-col gap-0.5 border-l border-border pl-3">
              {categories.map((c) => (
                <Link
                  key={c.key}
                  to="/$lang/products/$slug/"
                  params={{ lang, slug: c.slug[lang] }}
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-brand"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-border bg-white p-1.5">
                    <img src={c.icon} alt="" className="max-h-6 w-auto" />
                  </span>
                  <span className="leading-snug">{c.title[lang]}</span>
                </Link>
              ))}
              <Link
                to="/$lang/products/"
                params={{ lang }}
                onClick={onClose}
                className="rounded-xl px-3 py-2.5 text-sm font-bold text-brand hover:underline"
              >
                {tr("nav.allProducts")} →
              </Link>
            </div>
          )}

          <DrawerLink to="/$lang/useful/" params={{ lang }}>
            {tr("nav.useful")}
          </DrawerLink>
          <DrawerLink to="/$lang/contacts/" params={{ lang }}>
            {tr("nav.contacts")}
          </DrawerLink>
        </nav>

        <div className="mt-auto space-y-3 border-t border-border bg-surface px-5 py-6 text-sm">
          <a href={contact.phones[0].href} className="btn-primary w-full !py-3.5 text-base">
            <Phone className="size-4" aria-hidden />
            {contact.phones[0].label}
          </a>
          <div className="space-y-2 pt-1 text-muted-foreground">
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
              <span>
                {contact.city[lang]}
                <br />
                {contact.street[lang]}
              </span>
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 transition-colors hover:text-brand"
            >
              <Mail className="size-4 shrink-0 text-brand" aria-hidden />
              {contact.email}
            </a>
          </div>
          <div className="pt-2">
            <LangSwitch lang={lang} />
          </div>
        </div>
      </div>
    </div>
  );
}

function DrawerLink({
  children,
  exact,
  to,
  params,
}: {
  children: React.ReactNode;
  exact?: boolean;
  to: string;
  params: Record<string, string>;
}) {
  return (
    <Link
      to={to}
      params={params as never}
      {...(exact ? { activeOptions: { exact: true as const } } : {})}
      className="rounded-2xl px-4 py-3.5 text-lg font-bold text-ink transition-colors hover:bg-muted"
      activeProps={{ className: "bg-muted text-brand" }}
    >
      {children}
    </Link>
  );
}
