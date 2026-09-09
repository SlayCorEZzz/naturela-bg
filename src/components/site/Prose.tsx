import { useEffect, useRef } from "react";

import { cn } from "../../lib/utils";

/**
 * Renders copy imported from the previous site. The markup is legacy HTML
 * (nested tables, fixed widths); the effect below gives every table its own
 * horizontal scroller so nothing forces the page wider than the viewport.
 */
export function Prose({ html, className }: { html: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    root.querySelectorAll<HTMLTableElement>("table").forEach((table) => {
      if (table.closest(".table-scroll") || table.querySelector("table")) return;
      const wrap = document.createElement("div");
      wrap.className = "table-scroll thin-scroll";
      table.parentNode?.insertBefore(wrap, table);
      wrap.appendChild(table);
    });
    // legacy markup sometimes ships fixed pixel widths on layout tables
    root.querySelectorAll<HTMLElement>("[width]").forEach((el) => {
      if (el.tagName === "IMG") return;
      el.removeAttribute("width");
    });
  }, [html]);

  return (
    <div
      ref={ref}
      className={cn("prose-legacy", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
