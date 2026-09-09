import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

import { PageHero } from "../../../components/site/PageHero";
import { Prose } from "../../../components/site/Prose";
import { articleBySlug, articles } from "../../../data/articles";
import { isLang, translator, type Lang } from "../../../lib/i18n";
import { seo } from "../../../lib/seo";

export const Route = createFileRoute("/$lang/useful-more/$slug")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
    if (!articleBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const lang = (params.lang === "en" ? "en" : "bg") as Lang;
    const a = articleBySlug(params.slug);
    if (!a) return {};
    return seo({
      lang,
      title: `${a.title[lang]} | Naturela`,
      description: a.lead[lang] || undefined,
      path: `/${lang}/useful-more/${a.slug[lang]}/`,
      altPath: `/${lang === "bg" ? "en" : "bg"}/useful-more/${a.slug[lang === "bg" ? "en" : "bg"]}/`,
      image: a.img ?? undefined,
    });
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { lang: rawLang, slug } = Route.useParams();
  const lang = rawLang as Lang;
  const tr = translator(lang);
  const article = articleBySlug(slug)!;
  const others = articles.filter((a) => a.key !== article.key);

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={tr("useful.title")}
        title={article.title[lang]}
        lead={article.lead[lang] || undefined}
        crumbs={[
          { label: tr("useful.title"), to: "/$lang/useful/", params: { lang } },
          { label: article.title[lang] },
        ]}
      />

      <article className="shell py-12 sm:py-16">
        <div className="max-w-3xl">
          <Prose html={article.body[lang]} />
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <Link to="/$lang/useful/" params={{ lang }} className="btn-ghost">
            <ArrowLeft className="size-4" aria-hidden />
            {tr("useful.title")}
          </Link>
        </div>
      </article>

      {others.length > 0 && (
        <section className="bg-surface py-12 sm:py-16">
          <div className="shell">
            <h2 className="title-lg">{tr("useful.title")}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {others.map((a) => (
                <Link
                  key={a.key}
                  to="/$lang/useful-more/$slug/"
                  params={{ lang, slug: a.slug[lang] }}
                  className="surface-card group flex flex-col overflow-hidden"
                >
                  {a.img && (
                    <div className="aspect-[16/10] overflow-hidden bg-card">
                      <img
                        src={a.img}
                        alt=""
                        loading="lazy"
                        className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <h3 className="p-5 text-[0.95rem] font-bold leading-snug">{a.title[lang]}</h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
