import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the English MIMO-FE landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /MIMO-FE/);
  assert.match(html, /A beautiful home/);
  assert.match(html, /0\.2\.0-beta\.1/);
  assert.match(html, /Download on GitHub/);
  assert.match(html, /Latest release/);
  assert.match(html, /Explore the wiki/);
  assert.match(html, /Support/);
  assert.match(html, /github\.com\/fabiangonzalezdev\/Mimo-FE\/releases/);
  assert.match(html, /github\.com\/fabiangonzalezdev\/Mimo-FE\/wiki/);
  assert.doesNotMatch(html, /0\.1\.0 Preview/);
  assert.doesNotMatch(html, /Tu biblioteca|Descargar ahora|Novedades|Soporte/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/i);
});

test("keeps the console identity responsive and interactive", async () => {
  const [page, layout, css, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /https:\/\/github\.com\/fabiangonzalezdev\/Mimo-FE/);
  assert.match(page, /const wikiUrl = `\$\{applicationGithub\}\/wiki`/);
  assert.match(page, /useState<ThemeId>/);
  assert.match(page, /ambient-note/);
  assert.match(page, /function MimoLogo/);
  assert.match(layout, /MIMO-FE — A beautiful home for every game/);
  assert.match(layout, /<html lang="en">/);
  assert.match(css, /\.site-header\s*\{[^}]*position:\s*fixed/s);
  assert.match(css, /"Arial Rounded MT Bold"/);
  assert.match(css, /--aqua:\s*#73d7cf/);
  assert.match(css, /--coral:\s*#f29aa6/);
  assert.match(css, /--yellow:\s*#f1d47c/);
  assert.match(css, /--violet:\s*#a99ae8/);
  assert.match(css, /\.theme-menu\s*\{/);
  assert.match(css, /\.mobile-dock\s*\{/);
  assert.match(css, /@media \(max-width: 720px\)/);
  assert.match(
    css,
    /@media \(max-width: 1180px\)\s*\{[\s\S]*?\.hero\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)/,
  );
  assert.match(css, /\.hero-copy\s*\{[^}]*min-width:\s*0/s);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(
    access(new URL("../app/_sites-preview/SkeletonPreview.tsx", import.meta.url)),
  );
  await assert.rejects(
    access(new URL("../app/_sites-preview/preview.css", import.meta.url)),
  );
});
