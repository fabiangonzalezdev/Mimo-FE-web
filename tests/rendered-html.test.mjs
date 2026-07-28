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

test("server-renders the MIMO-FE landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /MIMO-FE/);
  assert.match(html, /Tu biblioteca/);
  assert.match(html, /0\.1\.0 Preview/);
  assert.match(html, /Descargar ahora/);
  assert.match(html, /Novedades/);
  assert.match(html, /Wiki/);
  assert.match(html, /Soporte/);
  assert.doesNotMatch(html, /Your site is taking shape|codex-preview/i);
});

test("keeps starter preview code out of the finished site", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /MIMO-FE/);
  assert.match(layout, /MIMO-FE — Tu biblioteca, a tu manera/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  await assert.rejects(access(new URL("../app/_sites-preview/", import.meta.url)));
});
