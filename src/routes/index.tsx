import { createFileRoute } from "@tanstack/react-router";

import { Home } from "../components/site/Home";
import { SiteLayout } from "../components/site/SiteLayout";
import { seo } from "../lib/seo";

/** The site root mirrors /bg/ — the canonical address the old site published. */
export const Route = createFileRoute("/")({
  head: () =>
    seo({
      lang: "bg",
      title: "Натурела — интелигентни електронни системи и устройства",
      description:
        "Контролери за пелетни горелки, пелетни и електрически котли. Терморегулатори за отоплителни уреди. Управления за електрически и комбинирани бойлери. Системи за мониторинг на фотоволтаични централи.",
      path: "/bg/",
      altPath: "/en/",
      image: "/n/hero1.jpg",
    }),
  component: () => (
    <SiteLayout lang="bg">
      <Home lang="bg" />
    </SiteLayout>
  ),
});
