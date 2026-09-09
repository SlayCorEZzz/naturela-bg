import type { ReactNode } from "react";

import type { Lang } from "../../data/catalog";
import { translator } from "../../lib/i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  lang: Lang;
  children: ReactNode;
}

export function SiteLayout({ lang, children }: Props) {
  const tr = translator(lang);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-white"
      >
        {tr("skip")}
      </a>
      <Header lang={lang} />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
