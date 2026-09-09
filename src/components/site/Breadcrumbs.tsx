import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

import type { Lang } from "../../data/catalog";
import { translator } from "../../lib/i18n";

export interface Crumb {
  label: string;
  to?: string | undefined;
  params?: Record<string, string> | undefined;
}

export function Breadcrumbs({
  lang,
  items,
  tone = "light",
}: {
  lang: Lang;
  items: Crumb[];
  tone?: "light" | "dark";
}) {
  const tr = translator(lang);
  const muted = tone === "dark" ? "text-ink-foreground/55" : "text-muted-foreground";
  const hover = tone === "dark" ? "hover:text-white" : "hover:text-brand";
  const current = tone === "dark" ? "text-ink-foreground/85" : "text-foreground";

  const all: Crumb[] = [{ label: tr("crumb.home"), to: "/$lang/", params: { lang } }, ...items];

  return (
    <nav
      aria-label="breadcrumb"
      className={`flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.78rem] font-semibold ${muted}`}
    >
      {all.map((c, i) => {
        const last = i === all.length - 1;
        return (
          <span
            key={`${c.label}-${i}`}
            /* the page title repeats as the H1 right below, so drop it on phones */
            className={`items-center gap-1.5 ${last && all.length > 1 ? "hidden sm:inline-flex" : "inline-flex"}`}
          >
            {i > 0 && <ChevronRight className="size-3.5 shrink-0 opacity-50" aria-hidden />}
            {c.to && !last ? (
              <Link to={c.to} params={c.params as never} className={`transition-colors ${hover}`}>
                {c.label}
              </Link>
            ) : (
              <span className={last ? current : undefined} aria-current={last ? "page" : undefined}>
                {c.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
