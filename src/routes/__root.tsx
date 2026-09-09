import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteLayout } from "../components/site/SiteLayout";
import { isLang, type Lang } from "../lib/i18n";

/** Language comes from the URL prefix the previous site established. */
function useUrlLang(): Lang {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const seg = pathname.split("/")[1];
  return isLang(seg) ? seg : "bg";
}

function NotFoundComponent() {
  const lang = useUrlLang();
  const bg = lang === "bg";

  return (
    <SiteLayout lang={lang}>
      <div className="shell flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <p className="font-display text-[clamp(4rem,16vw,9rem)] font-extrabold leading-none text-brand">
          404
        </p>
        <h1 className="title-lg mt-4">{bg ? "Страницата не е намерена" : "Page not found"}</h1>
        <p className="mt-3 max-w-md text-muted-foreground">
          {bg
            ? "Адресът не съществува или съдържанието е преместено. Опитайте от продуктите или се свържете с нас."
            : "This address does not exist or the content has moved. Try the products, or get in touch."}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`/${lang}/products/`} className="btn-primary">
            {bg ? "Всички продукти" : "All products"}
          </a>
          <a href={`/${lang}/`} className="btn-ghost">
            {bg ? "Начало" : "Home"}
          </a>
        </div>
      </div>
    </SiteLayout>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const lang = useUrlLang();
  const bg = lang === "bg";

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="title-lg">{bg ? "Страницата не се зареди" : "This page didn't load"}</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          {bg
            ? "Нещо се обърка при зареждането. Опитайте отново или се върнете в началото."
            : "Something went wrong on our end. You can try refreshing or head back home."}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary"
          >
            {bg ? "Опитай отново" : "Try again"}
          </button>
          <a href={`/${lang}/`} className="btn-ghost">
            {bg ? "Начало" : "Home"}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#0c1424" },
      { title: "Натурела — интелигентни електронни системи и устройства" },
      {
        name: "description",
        content:
          "Интелигентни електронни системи и устройства: контролери за пелетни горелки и котли, терморегулатори за бойлери и отоплителни уреди, мониторинг на фотоволтаични централи.",
      },
      { name: "author", content: "Naturela" },
      { property: "og:site_name", content: "Naturela" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        // Onest and Manrope both ship Cyrillic — Sora does not, which is why the
        // previous headings fell back to a system font in Bulgarian.
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Onest:wght@500;600;700;800&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      // the mark Naturela has always used in the tab bar
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "shortcut icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="bg">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const lang = useUrlLang();

  // keep <html lang> in step with the URL prefix for screen readers and SEO
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
