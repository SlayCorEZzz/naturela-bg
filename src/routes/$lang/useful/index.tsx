import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { PageHero } from "../../../components/site/PageHero";
import { articles } from "../../../data/articles";
import { isLang, translator, type Lang } from "../../../lib/i18n";
import { seo } from "../../../lib/seo";

export const Route = createFileRoute("/$lang/useful/")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  head: ({ params }) => {
    const lang = (params.lang === "en" ? "en" : "bg") as Lang;
    return seo({
      lang,
      title: lang === "bg" ? "Полезно | Натурела" : "Useful | Naturela",
      description:
        lang === "bg"
          ? "Защо електронното управление има значение — статии и резултати от изпитания за бойлери, панелни конвектори и фотоволтаични централи."
          : "Why electronic control matters — articles and test results for water heaters, panel convectors and photovoltaic plants.",
      path: `/${lang}/useful/`,
      altPath: `/${lang === "bg" ? "en" : "bg"}/useful/`,
    });
  },
  component: UsefulPage,
});

function UsefulPage() {
  const { lang: rawLang } = Route.useParams();
  const lang = rawLang as Lang;
  const tr = translator(lang);

  return (
    <>
      <PageHero
        lang={lang}
        eyebrow={tr("useful.title")}
        title={tr("useful.title")}
        lead={tr("useful.lead")}
        crumbs={[{ label: tr("useful.title") }]}
      />

      <section className="shell py-12 sm:py-16">
        <div className="grid gap-6">
          {articles.map((a) => (
            <Link
              key={a.key}
              to="/$lang/useful-more/$slug/"
              params={{ lang, slug: a.slug[lang] }}
              className="surface-card group grid gap-5 overflow-hidden p-4 sm:grid-cols-[16rem_1fr] sm:p-5"
            >
              {a.img && (
                <div className="overflow-hidden rounded-2xl bg-surface">
                  <img
                    src={a.img}
                    alt=""
                    loading="lazy"
                    className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-full"
                  />
                </div>
              )}
              <div className="flex flex-col justify-center py-2 pr-2">
                <h2 className="text-lg font-bold leading-snug sm:text-xl">{a.title[lang]}</h2>
                {a.lead[lang] && (
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {a.lead[lang]}
                  </p>
                )}
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand">
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
      </section>
    </>
  );
}
