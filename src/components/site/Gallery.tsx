import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

import { cn } from "../../lib/utils";

export function Gallery({ images, alt }: { images: string[]; alt: string }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);

  useEffect(() => setActive(0), [images]);

  useEffect(() => {
    if (!zoom) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [zoom, images.length]);

  if (images.length === 0) {
    return (
      <div className="grid aspect-[4/3] place-items-center rounded-3xl border border-border bg-surface text-sm text-muted-foreground">
        Naturela
      </div>
    );
  }

  const step = (d: number) => setActive((i) => (i + d + images.length) % images.length);

  return (
    <>
      <div className="min-w-0 space-y-3">
        <div className="group relative overflow-hidden rounded-3xl border border-border bg-white">
          <img
            key={images[active]}
            src={images[active]}
            alt={alt}
            className="fade-in aspect-[4/3] w-full bg-white object-contain p-4 sm:p-6"
          />
          <button
            type="button"
            onClick={() => setZoom(true)}
            aria-label="Zoom"
            className="absolute right-3 top-3 grid size-10 place-items-center rounded-full border border-border bg-background/85 text-foreground/70 backdrop-blur transition-colors hover:border-brand hover:text-brand"
          >
            <ZoomIn className="size-4" aria-hidden />
          </button>

          {images.length > 1 && (
            <>
              <NavBtn side="left" onClick={() => step(-1)} />
              <NavBtn side="right" onClick={() => step(1)} />
            </>
          )}
        </div>

        {images.length > 1 && (
          <div className="thin-scroll -mx-1 flex gap-2.5 overflow-x-auto px-1 pb-1">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${alt} ${i + 1}`}
                aria-current={i === active}
                className={cn(
                  "size-[4.5rem] shrink-0 overflow-hidden rounded-xl border-2 bg-white p-1 transition-colors sm:size-20",
                  i === active ? "border-brand" : "border-border hover:border-brand-light",
                )}
              >
                <img src={src} alt="" loading="lazy" className="size-full object-contain" />
              </button>
            ))}
          </div>
        )}
      </div>

      {zoom && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/92 p-4"
          role="dialog"
          aria-modal="true"
        >
          <button
            aria-label="Close"
            onClick={() => setZoom(false)}
            className="absolute inset-0 h-full w-full cursor-zoom-out"
          />
          <img
            src={images[active]}
            alt={alt}
            className="fade-in relative max-h-[86vh] max-w-full rounded-2xl bg-white object-contain p-3"
          />
          <button
            type="button"
            onClick={() => setZoom(false)}
            aria-label="Close"
            className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/10"
          >
            <X className="size-5" aria-hidden />
          </button>
          {images.length > 1 && (
            <>
              <NavBtn side="left" onClick={() => step(-1)} dark />
              <NavBtn side="right" onClick={() => step(1)} dark />
            </>
          )}
        </div>
      )}
    </>
  );
}

function NavBtn({
  side,
  onClick,
  dark,
}: {
  side: "left" | "right";
  onClick: () => void;
  dark?: boolean;
}) {
  const Icon = side === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={side}
      className={cn(
        "absolute top-1/2 z-10 grid size-10 -translate-y-1/2 place-items-center rounded-full border transition-colors",
        side === "left" ? "left-3" : "right-3",
        dark
          ? "border-white/25 text-white hover:bg-white/10"
          : "border-border bg-background/85 text-foreground/70 backdrop-blur hover:border-brand hover:text-brand",
      )}
    >
      <Icon className="size-5" aria-hidden />
    </button>
  );
}
