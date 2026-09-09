import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Mail, Phone } from "lucide-react";

import {
  categories,
  products,
  productsById,
  productsOf,
  type Lang,
  type Product,
} from "../../data/catalog";
import { articles } from "../../data/articles";
import {
  about,
  aboutTitle,
  clients,
  contact,
  highlights,
  showcaseIds,
  stats,
} from "../../data/site";
import { translator } from "../../lib/i18n";
import { ProductCard } from "./ProductCard";

export function Home({ lang }: { lang: Lang }) {
  const tr = translator(lang);
  const [slide, setSlide] = useState(0);
  /* one device per product line; falls back to the newest items if an id moves */
  const picked = showcaseIds.map((id) => productsById[id]).filter((p): p is Product => Boolean(p));
  const showcase: Product[] = picked.length > 0 ? picked : products.slice(0, 4);
  const hero = showcase[slide % showcase.length] as Product;

  useEffect(() => {
    const id = setInterval(() => setSlide((s) => (s + 1) % showcase.length), 6500);
    return () => clearInterval(id);
  }, [showcase.length]);

  const featured = products.slice(0, 6);

  return (
    <>
      {/* ------------------------------------------------------------ hero
          Light ground, so the devices — photographed on white — carry the page
          without a scrim between them and the reader. */}
      <section className="bg-background">
        <div className="shell grid items-center gap-10 pb-14 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-20 lg:pt-16">
          <div className="min-w-0">
            <p className="eyebrow rise-in">
              <span className="h-px w-7 bg-brand" aria-hidden />
              {tr("home.eyebrow")}
            </p>
            <h1 className="title-xl rise-in mt-5 text-ink">
              {tr("home.heroTitle")}{" "}
              <span className="text-brand">{tr("home.heroTitleAccent")}</span>.
            </h1>
            <p className="rise-in mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {tr("home.heroLead")}
            </p>

            <div className="rise-in mt-9 flex flex-wrap items-center gap-3">
              <Link to="/$lang/products/" params={{ lang }} className="btn-primary !px-7 !py-3.5">
                {tr("home.ctaProducts")}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <Link to="/$lang/contacts/" params={{ lang }} className="btn-ghost">
                {tr("home.ctaContact")}
              </Link>
            </div>
          </div>

          <div className="min-w-0">
            <div className="rounded-3xl border border-border bg-card p-4 shadow-[var(--shadow-soft)] sm:p-5">
              <Link to="/$lang/product/$slug/" params={{ lang, slug: hero.slug }} className="block">
                <div className="overflow-hidden rounded-2xl bg-white">
                  <img
                    key={hero.id}
                    src={hero.card ?? ""}
                    alt={hero.title[lang]}
                    fetchPriority="high"
                    className="fade-in aspect-[4/3] w-full object-contain"
                  />
                </div>
                <div className="px-1.5 pb-1 pt-4">
                  {hero.model && (
                    <span className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-brand">
                      {hero.model}
                    </span>
                  )}
                  <p className="mt-1.5 line-clamp-2 text-[0.95rem] font-bold leading-snug text-foreground">
                    {hero.title[lang]}
                  </p>
                </div>
              </Link>
            </div>

            <div className="mt-4 flex gap-2" role="tablist" aria-label={tr("home.featuredEyebrow")}>
              {showcase.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={i === slide}
                  aria-label={p.model || p.title[lang]}
                  onClick={() => setSlide(i)}
                  className="h-1.5 rounded-full bg-foreground/20 transition-all duration-300"
                  style={{ width: i === slide ? 36 : 14, opacity: i === slide ? 1 : 0.55 }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="border-y border-border bg-surface">
          <dl className="shell grid grid-cols-2 gap-x-6 gap-y-7 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.key}>
                <dt className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1.5 text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground sm:text-xs">
                  {tr(`stat.${s.key}` as never)}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------------------------------------------- categories */}
      <section className="section-y">
        <div className="shell">
          <SectionHead
            eyebrow={tr("home.catsEyebrow")}
            title={tr("home.catsTitle")}
            action={
              <Link to="/$lang/kategorii/" params={{ lang }} className="btn-ghost">
                {tr("nav.categories")}
              </Link>
            }
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => {
              const n = productsOf(c).length;
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
                  <h3 className="mt-5 text-[1.05rem] font-bold leading-snug">{c.title[lang]}</h3>
                  <p className="mt-2 text-sm font-semibold text-muted-foreground">
                    {n} {n === 1 ? tr("cat.count1") : tr("cat.count")}
                  </p>
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
        </div>
      </section>

      {/* ------------------------------------------------------ news */}
      <section className="section-y bg-surface">
        <div className="shell">
          <p className="eyebrow">
            <span className="h-px w-6 bg-brand" aria-hidden />
            {tr("home.newsEyebrow")}
          </p>
          <h2 className="title-lg mt-3">{tr("home.newsTitle")}</h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {highlights.map((h) => {
              const inner = (
                <>
                  <div className="overflow-hidden rounded-2xl border border-border bg-white sm:size-auto">
                    <img
                      src={h.img}
                      alt=""
                      loading="lazy"
                      className="h-40 w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105 sm:h-full"
                    />
                  </div>
                  <div>
                    <span className="rounded-full bg-brand/10 px-3 py-1 text-[0.68rem] font-extrabold uppercase tracking-wider text-brand">
                      {h.tag[lang]}
                    </span>
                    <h3 className="mt-3.5 text-lg font-bold text-ink">{h.title[lang]}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {h.text[lang]}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
                      {tr("home.readMore")}
                      <ArrowUpRight
                        className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </>
              );

              const cls = "surface-card group grid gap-5 p-5 sm:grid-cols-[11rem_1fr] sm:p-6";

              return h.external ? (
                <a
                  key={h.title.bg}
                  href={h.to(lang)}
                  target="_blank"
                  rel="noreferrer"
                  className={cls}
                >
                  {inner}
                </a>
              ) : (
                <a key={h.title.bg} href={h.to(lang)} className={cls}>
                  {inner}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- featured */}
      <section className="section-y">
        <div className="shell">
          <SectionHead
            eyebrow={tr("home.featuredEyebrow")}
            title={tr("home.featuredTitle")}
            action={
              <Link to="/$lang/products/" params={{ lang }} className="btn-ghost">
                {tr("nav.allProducts")}
              </Link>
            }
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} lang={lang} showCategory />
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- about */}
      <section className="bg-surface section-y">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div>
            <p className="eyebrow">
              <span className="h-px w-6 bg-brand" aria-hidden />
              {tr("home.aboutEyebrow")}
            </p>
            <h2 className="title-lg mt-3">{aboutTitle[lang]}</h2>
            <p className="mt-5 text-sm font-semibold text-muted-foreground">
              {contact.city[lang]}, {contact.street[lang]}
            </p>
            <Link
              to="/$lang/pages/$slug/"
              params={{ lang, slug: "naturela-varna" }}
              className="btn-primary mt-7"
            >
              {tr("home.moreAbout")}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="space-y-4 text-[1.02rem] leading-relaxed text-surface-foreground">
            {about[lang].map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------- useful */}
      <section className="section-y">
        <div className="shell">
          <SectionHead
            eyebrow={tr("useful.title")}
            title={tr("useful.lead")}
            action={
              <Link to="/$lang/useful/" params={{ lang }} className="btn-ghost">
                {tr("useful.title")}
              </Link>
            }
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {articles.map((a) => (
              <Link
                key={a.key}
                to="/$lang/useful-more/$slug/"
                params={{ lang, slug: a.slug[lang] }}
                className="surface-card group flex flex-col overflow-hidden"
              >
                {a.img && (
                  <div className="aspect-[16/10] overflow-hidden bg-surface">
                    <img
                      src={a.img}
                      alt=""
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[0.95rem] font-bold leading-snug">{a.title[lang]}</h3>
                  <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{a.lead[lang]}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 pt-1 text-sm font-bold text-brand">
                    {tr("home.readMore")}
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- clients */}
      <section className="bg-surface pb-16 pt-16 sm:pb-20 sm:pt-20">
        <div className="shell">
          <p className="eyebrow">
            <span className="h-px w-6 bg-brand" aria-hidden />
            {tr("home.clientsEyebrow")}
          </p>
          <h2 className="title-lg mt-3">{tr("home.clientsTitle")}</h2>
        </div>
        <div
          className="relative mt-9 overflow-hidden"
          style={{
            maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
            WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          }}
        >
          <div className="marquee-track flex w-max gap-4">
            {[...clients, ...clients].map((src, i) => (
              <div
                key={i}
                className="flex h-24 w-44 shrink-0 items-center justify-center rounded-2xl border border-border bg-card p-5 sm:h-28 sm:w-56 sm:p-6"
              >
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  className="max-h-12 w-auto opacity-70 transition-opacity hover:opacity-100 sm:max-h-14"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- cta */}
      <section className="shell pb-16 pt-16 sm:pb-24 sm:pt-20">
        <div className="rounded-[1.75rem] border border-border bg-surface px-6 py-12 sm:px-12 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div>
              <h2 className="title-lg text-ink">{tr("contacts.lead")}</h2>
              <p className="mt-3 text-muted-foreground">
                {contact.city[lang]}, {contact.street[lang]}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a href={contact.phones[0].href} className="btn-primary">
                <Phone className="size-4" aria-hidden />
                {contact.phones[0].label}
              </a>
              <a href={`mailto:${contact.email}`} className="btn-ghost">
                <Mail className="size-4" aria-hidden />
                {tr("contacts.mail")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHead({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-5">
      <div>
        <p className="eyebrow">
          <span className="h-px w-6 bg-brand" aria-hidden />
          {eyebrow}
        </p>
        <h2 className="title-lg mt-3 max-w-2xl">{title}</h2>
      </div>
      {action}
    </div>
  );
}
