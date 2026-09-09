/**
 * Pull the product PDFs off the old file server and host them with the site.
 *
 *   node scripts/fetch-docs.mjs
 *
 * Documentation links currently point at https://www.naturela-bg.com/files/… so
 * they keep working today. Run this once when that server is going away: it
 * downloads every linked document into public/media/docs/ and rewrites the
 * links in src/data/ to the local copies. About 135 MB in total.
 */
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_DIR = path.join(ROOT, "src/data");
const DOCS_DIR = path.join(ROOT, "public/media/docs");
const REMOTE = /https:\/\/www\.naturela-bg\.com(\/files\/[^"'\s)]+)/g;

/** Same naming scheme the images already use: readable stem + path hash. */
function localName(filePath) {
  const base = decodeURIComponent(filePath.split("/").pop() || "file");
  const stem =
    base
      .replace(/\.[^.]+$/, "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(-46) || "file";
  const hash = crypto.createHash("md5").update(filePath).digest("hex").slice(0, 6);
  const ext = (base.match(/\.([a-z0-9]+)$/i)?.[1] || "bin").toLowerCase();
  return `/media/docs/${stem}-${hash}.${ext}`;
}

const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".ts"));
const sources = files.map((f) => ({
  file: f,
  text: fs.readFileSync(path.join(DATA_DIR, f), "utf8"),
}));

const remotePaths = new Set();
for (const { text } of sources) {
  for (const m of text.matchAll(REMOTE)) remotePaths.add(m[1]);
}

if (remotePaths.size === 0) {
  console.log("Nothing to do — the data already points at local documents.");
  process.exit(0);
}

fs.mkdirSync(DOCS_DIR, { recursive: true });
console.log(`Downloading ${remotePaths.size} documents…`);

const failed = [];
const queue = [...remotePaths];
let done = 0;

async function grab(remote) {
  const out = path.join(ROOT, "public", localName(remote));
  if (fs.existsSync(out) && fs.statSync(out).size > 1024) return;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(`https://www.naturela-bg.com${encodeURI(remote)}`, {
        headers: { "User-Agent": "Mozilla/5.0" },
        signal: AbortSignal.timeout(120000),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 1024) throw new Error(`suspiciously small (${buf.length} bytes)`);
      fs.writeFileSync(out, buf);
      return;
    } catch (err) {
      if (attempt === 3) failed.push([remote, err.message]);
    }
  }
}

await Promise.all(
  Array.from({ length: 4 }, async () => {
    while (queue.length) {
      const remote = queue.shift();
      await grab(remote);
      process.stdout.write(`\r  ${++done}/${remotePaths.size}`);
    }
  }),
);
process.stdout.write("\n");

if (failed.length) {
  console.error(`\n${failed.length} download(s) failed — links left pointing at the old server:`);
  failed.forEach(([p, why]) => console.error(`  ${p}: ${why}`));
}

const stillRemote = new Set(failed.map(([p]) => p));
let rewritten = 0;
for (const { file, text } of sources) {
  const next = text.replace(REMOTE, (whole, filePath) =>
    stillRemote.has(filePath) ? whole : localName(filePath),
  );
  if (next !== text) {
    fs.writeFileSync(path.join(DATA_DIR, file), next);
    rewritten++;
  }
}

console.log(
  `\nDone. ${remotePaths.size - failed.length} documents saved, ${rewritten} data file(s) rewritten.`,
);
console.log("public/media/docs/ is now part of the site — commit it or move it to your CDN.");
