import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "../../../components/site/PageHero";
import { Prose } from "../../../components/site/Prose";
import { pageBySlug, staticPages } from "../../../data/pages";
import { about, aboutTitle, contact, stats } from "../../../data/site";
import { isLang, translator, type Lang } from "../../../lib/i18n";
import { seo } from "../../../lib/seo";

export const Route = createFileRoute("/$lang/pages/$slug")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
    if (!pageBySlug(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const lang = (params.lang === "en" ? "en" : "bg") as Lang;
    const p = pageBySlug(params.slug);
    if (!p) return {};
    return seo({
      lang,
      title: `${p.title[lang]} | Naturela`,
      path: `/${lang}/pages/${p.slug[lang]}/`,
      altPath: `/${lang === "bg" ? "en" : "bg"}/pages/${p.slug[lang === "bg" ? "en" : "bg"]}/`,
    });
  },
  component: StaticPageRoute,
});

function StaticPageRoute() {
  const { lang: rawLang, slug } = Route.useParams();
  const lang = rawLang as Lang;
  const tr = translator(lang);
  const page = pageBySlug(slug)!;
  const isAbout = page.key === "naturela-varna";
  const history = staticPages.find((p) => p.key === "istoriya");

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={isAbout ? tr("home.aboutEyebrow") : undefined}
        title={page.title[lang]}
        crumbs={[{ label: page.title[lang] }]}
      />

      {isAbout && (
        <section className="bg-surface py-12 sm:py-16">
          <div className="shell grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <div>
              <h2 className="title-lg">{aboutTitle[lang]}</h2>
              <p className="mt-5 text-sm font-semibold text-muted-foreground">
                {contact.city[lang]}
                <br />
                {contact.street[lang]}
              </p>
              <dl className="mt-8 grid grid-cols-2 gap-6">
                {stats.map((s) => (
                  <div key={s.key}>
                    <dt className="font-display text-2xl font-extrabold text-ink">{s.value}</dt>
                    <dd className="mt-1 text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                      {tr(`stat.${s.key}` as never)}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="space-y-4 text-[1.02rem] leading-relaxed text-surface-foreground">
              {about[lang].map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="shell py-12 sm:py-16">
        <div className="max-w-4xl">
          <Prose html={page.body[lang]} />
        </div>

        {isAbout && history && (
          <div className="mt-12 border-t border-border pt-8">
            <Link
              to="/$lang/pages/$slug/"
              params={{ lang, slug: history.slug[lang] }}
              className="btn-primary"
            >
              {history.title[lang]}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
