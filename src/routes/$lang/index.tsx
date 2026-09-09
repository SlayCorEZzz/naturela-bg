import { createFileRoute } from "@tanstack/react-router";

import { Home } from "../../components/site/Home";
import { seo } from "../../lib/seo";
import type { Lang } from "../../lib/i18n";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = (params.lang === "en" ? "en" : "bg") as Lang;
    return seo({
      lang,
      title:
        lang === "bg"
          ? "Натурела — интелигентни електронни системи и устройства"
          : "Naturela — intelligent electronic systems and devices",
      description:
        lang === "bg"
          ? "Контролери за пелетни горелки, пелетни и електрически котли. Терморегулатори за отоплителни уреди. Управления за електрически и комбинирани бойлери. Системи за мониторинг на фотоволтаични централи."
          : "Controllers for pellet burners, pellet and electric boilers. Thermoregulators for heating appliances. Controls for electric and combined water heaters. Monitoring systems for photovoltaic power plants.",
      path: `/${lang}/`,
      image: "/n/hero1.jpg",
    });
  },
  component: LangHome,
});

function LangHome() {
  const { lang } = Route.useParams();
  return <Home lang={lang as Lang} />;
}
