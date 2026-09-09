import type { ReactNode } from "react";

import type { Lang } from "../../data/catalog";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

/** Light page banner, directly under the sticky header. */
export function PageHero({
  lang,
  eyebrow,
  title,
  lead,
  crumbs,
  aside,
}: {
  lang: Lang;
  eyebrow?: string | undefined;
  title: string;
  lead?: string | undefined;
  crumbs?: Crumb[] | undefined;
  aside?: ReactNode;
}) {
  return (
    <section className="border-b border-border bg-background">
      <div className="shell grid gap-8 py-9 sm:py-12 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:py-14">
        <div>
          {crumbs && <Breadcrumbs lang={lang} items={crumbs} />}
          {eyebrow && (
            <p className="eyebrow mt-5">
              <span className="h-px w-6 bg-brand" aria-hidden />
              {eyebrow}
            </p>
          )}
          <h1 className="title-lg mt-3 max-w-3xl text-ink">{title}</h1>
          {lead && (
            <p className="mt-4 max-w-2xl text-[1.02rem] leading-relaxed text-muted-foreground">
              {lead}
            </p>
          )}
        </div>
        {aside && <div className="lg:justify-self-end">{aside}</div>}
      </div>
    </section>
  );
}
