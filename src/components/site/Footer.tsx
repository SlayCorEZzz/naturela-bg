import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";

import { categories, type Lang } from "../../data/catalog";
import { contact } from "../../data/site";
import { translator } from "../../lib/i18n";

export function Footer({ lang }: { lang: Lang }) {
  const tr = translator(lang);

  return (
    <footer className="border-t border-border bg-surface">
      <div className="shell grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.4fr_1.1fr] lg:gap-12 lg:py-20">
        <div>
          <img src="/n/logo-ink.png" alt="Naturela Electronics" className="h-9 w-auto" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {tr("footer.tagline")}
          </p>
        </div>

        <nav aria-label={tr("nav.menu")}>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-ink">
            {tr("nav.menu")}
          </h2>
          <span className="mt-3 block h-0.5 w-6 rounded-full bg-brand" />
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/$lang/" params={{ lang }} className="transition-colors hover:text-brand">
                {tr("nav.home")}
              </Link>
            </li>
            <li>
              <Link
                to="/$lang/pages/$slug/"
                params={{ lang, slug: "naturela-varna" }}
                className="transition-colors hover:text-brand"
              >
                {tr("nav.about")}
              </Link>
            </li>
            <li>
              <Link
                to="/$lang/useful/"
                params={{ lang }}
                className="transition-colors hover:text-brand"
              >
                {tr("nav.useful")}
              </Link>
            </li>
            <li>
              <Link
                to="/$lang/contacts/"
                params={{ lang }}
                className="transition-colors hover:text-brand"
              >
                {tr("nav.contacts")}
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label={tr("nav.categories")}>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-ink">
            {tr("nav.categories")}
          </h2>
          <span className="mt-3 block h-0.5 w-6 rounded-full bg-brand" />
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {categories.map((c) => (
              <li key={c.key}>
                <Link
                  to="/$lang/products/$slug/"
                  params={{ lang, slug: c.slug[lang] }}
                  className="transition-colors hover:text-brand"
                >
                  {c.title[lang]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-extrabold uppercase tracking-[0.18em] text-ink">
            {tr("nav.contacts")}
          </h2>
          <span className="mt-3 block h-0.5 w-6 rounded-full bg-brand" />
          <address className="mt-4 space-y-3 text-sm not-italic text-muted-foreground">
            <p className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
              <span>
                {contact.city[lang]}
                <br />
                {contact.street[lang]}
              </span>
            </p>
            <p className="flex items-start gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
              <span className="flex flex-col gap-1">
                {contact.phones.map((p) => (
                  <a key={p.href} href={p.href} className="transition-colors hover:text-brand">
                    {p.label}
                  </a>
                ))}
              </span>
            </p>
            <p className="flex items-start gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
              <a
                href={`mailto:${contact.email}`}
                className="break-all transition-colors hover:text-brand"
              >
                {contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-6 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Naturela. {tr("footer.rights")}
          </p>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <Link
              to="/$lang/pages/$slug/"
              params={{ lang, slug: lang === "bg" ? "usloviya-za-polzvane" : "terms-of-agreement" }}
              className="transition-colors hover:text-brand"
            >
              {tr("footer.terms")}
            </Link>
            <span aria-hidden>/</span>
            <Link
              to="/$lang/pages/$slug/"
              params={{ lang, slug: "privacy" }}
              className="transition-colors hover:text-brand"
            >
              {tr("footer.privacy")}
            </Link>
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 font-semibold transition-colors hover:border-brand hover:text-brand"
          >
            <ArrowUp className="size-3.5" aria-hidden />
            {tr("toTop")}
          </button>
        </div>
      </div>
    </footer>
  );
}
