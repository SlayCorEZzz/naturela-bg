import { Outlet, createFileRoute, notFound } from "@tanstack/react-router";

import { SiteLayout } from "../../components/site/SiteLayout";
import { isLang, type Lang } from "../../lib/i18n";

/**
 * The previous site published every page under /bg/… and /en/…; those addresses
 * are kept verbatim so existing links and search results keep working.
 */
export const Route = createFileRoute("/$lang")({
  beforeLoad: ({ params }) => {
    if (!isLang(params.lang)) throw notFound();
  },
  component: LangLayout,
});

function LangLayout() {
  const { lang } = Route.useParams();

  return (
    <SiteLayout lang={lang as Lang}>
      <Outlet />
    </SiteLayout>
  );
}
