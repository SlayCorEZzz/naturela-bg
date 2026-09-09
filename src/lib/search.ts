import { products, type Lang, type Product } from "../data/catalog";

const norm = (s: string) =>
  s
    .toLocaleLowerCase("bg")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();

const tokens = (s: string) => norm(s).split(" ").filter(Boolean);

/** Shown before anything is typed: the newest devices, so the panel is never blank. */
export const defaultResults = (count = 6): Product[] => products.slice(0, count);

/**
 * Terms match the start of a word, not any position inside one — otherwise a
 * two-letter query hits the middle of half the catalogue. Long terms (4+) may
 * still match mid-word, which keeps partial model numbers working.
 */
function scoreTerm(term: string, title: string[], model: string[], body: string[]): number {
  if (model.some((t) => t.startsWith(term))) return 6;
  if (title.some((t) => t.startsWith(term))) return 4;
  if (body.some((t) => t.startsWith(term))) return 2;
  if (term.length >= 4) {
    if (title.some((t) => t.includes(term))) return 3;
    if (body.some((t) => t.includes(term))) return 1;
  }
  return 0;
}

export function searchProducts(query: string, lang: Lang): Product[] {
  const terms = tokens(query);
  if (terms.length === 0) return [];

  return products
    .map((p) => {
      const title = tokens(p.title[lang]);
      const model = tokens(p.model);
      const body = tokens(p.excerpt[lang]);

      let score = 0;
      for (const term of terms) {
        const s = scoreTerm(term, title, model, body);
        if (s === 0) return null; // every term has to land somewhere
        score += s;
      }
      return { p, score };
    })
    .filter((x): x is { p: Product; score: number } => x !== null)
    .sort((a, b) => b.score - a.score || Number(b.p.id) - Number(a.p.id))
    .map((x) => x.p);
}
