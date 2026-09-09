import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Download, FileText, Mail, Phone } from "lucide-react";

import { Gallery } from "../../../components/site/Gallery";
import { PageHero } from "../../../components/site/PageHero";
import { ProductCard } from "../../../components/site/ProductCard";
import { Prose } from "../../../components/site/Prose";
import { categories, productBySlug, productsById } from "../../../data/catalog";
import { contact } from "../../../data/site";
import { isLang, translator, type Lang } from "../../../lib/i18n";
import { seo } from "../../../lib/seo";

export const Route = createFileRoute("/$lang/product/$slug")({
  loader: async ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    const mod =
      params.lang === "en"
        ? await import("../../../data/bodies.en")
        : await import("../../../data/bodies.bg");
    return { body: mod.default[product.id] ?? "" };
  },
  head: ({ params }) => {
    const lang = (params.lang === "en" ? "en" : "bg") as Lang;
    const p = productBySlug(params.slug);
    if (!p) return {};
    return seo({
      lang,
      title: `${p.title[lang]} | Naturela`,
      description: p.excerpt[lang],
      path: `/${lang}/product/${p.slug}/`,
      altPath: `/${lang === "bg" ? "en" : "bg"}/product/${p.slug}/`,
      image: p.card ?? undefined,
    });
  },
  component: ProductPage,
});

function ProductPage() {
  const { lang: rawLang, slug } = Route.useParams();
  const lang = rawLang as Lang;
  const tr = translator(lang);
  const { body } = Route.useLoaderData();

  const product = productBySlug(slug)!;
  const category = categories.find((c) => c.slug[lang] === product.cat[lang]);
  const docs = product.docs[lang].length ? product.docs[lang] : product.docs.bg;
  const gallery = product.gallery[lang].length ? product.gallery[lang] : product.gallery.bg;
  const related = product.related
    .map((id) => productsById[id])
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const inquiry = `${tr("contacts.about")}: ${product.title[lang]}`;

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={product.model || undefined}
        title={product.title[lang]}
        crumbs={[
          { label: tr("crumb.products"), to: "/$lang/products/", params: { lang } },
          ...(category
            ? [
                {
                  label: category.title[lang],
                  to: "/$lang/products/$slug/",
                  params: { lang, slug: category.slug[lang] },
                },
              ]
            : []),
          { label: product.title[lang] },
        ]}
      />

      <section className="shell grid gap-10 py-10 sm:py-14 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <div className="min-w-0">
          <Gallery images={gallery} alt={product.title[lang]} />
        </div>

        <div className="min-w-0 space-y-6">
          <div className="rounded-3xl border border-border bg-surface p-6 sm:p-7">
            <h2 className="text-lg font-bold">{tr("product.inquiry")}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {product.excerpt[lang]}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/$lang/contacts/"
                params={{ lang }}
                search={{ url: product.slug }}
                className="btn-primary"
              >
                <Mail className="size-4" aria-hidden />
                {tr("contacts.form")}
              </Link>
              <a href={contact.phones[0].href} className="btn-ghost">
                <Phone className="size-4" aria-hidden />
                {contact.phones[0].label}
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">{inquiry}</p>
          </div>

          <div className="rounded-3xl border border-border p-6 sm:p-7">
            <h2 className="flex items-center gap-2 text-lg font-bold">
              <FileText className="size-5 text-brand" aria-hidden />
              {tr("product.docs")}
            </h2>
            {docs.length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">{tr("product.noDocs")}</p>
            ) : (
              <ul className="mt-4 divide-y divide-border">
                {docs.map((d) => (
                  <li key={d.href}>
                    <a
                      href={d.href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start gap-3 py-3 text-sm font-semibold transition-colors hover:text-brand"
                    >
                      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-muted text-[0.6rem] font-extrabold text-brand">
                        {d.ext || "PDF"}
                      </span>
                      <span className="flex-1 leading-snug">{d.label}</span>
                      <Download
                        className="mt-1 size-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      {body && (
        <section className="bg-surface py-12 sm:py-16">
          <div className="shell">
            <h2 className="title-lg">{tr("product.details")}</h2>
            <div className="mt-7 max-w-4xl rounded-3xl border border-border bg-card p-6 sm:p-9">
              <Prose html={body} />
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="shell py-14 sm:py-20">
          <h2 className="title-lg">{tr("product.related")}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} lang={lang} />
            ))}
          </div>
        </section>
      )}

      {category && (
        <div className="shell pb-16">
          <Link
            to="/$lang/products/$slug/"
            params={{ lang, slug: category.slug[lang] }}
            className="btn-ghost"
          >
            <ArrowLeft className="size-4" aria-hidden />
            {tr("product.back")}
          </Link>
        </div>
      )}

      {!category && (
        <div className="shell pb-16">
          <Link to="/$lang/products/" params={{ lang }} className="btn-ghost">
            {tr("nav.allProducts")}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      )}
    </>
  );
}
