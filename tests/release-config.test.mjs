import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const projectRoot = new URL("../", import.meta.url);

async function readProjectFile(path) {
  return readFile(new URL(path, projectRoot), "utf8");
}

test("the production script uses the Netlify-supported Next.js build", async () => {
  const packageJson = JSON.parse(await readProjectFile("package.json"));

  assert.equal(packageJson.scripts.build, "next build");
  assert.match(packageJson.scripts["build:sites"], /vinext build/);
  assert.match(packageJson.engines.node, /22\.13\.0/);
});

test("Netlify configuration publishes the Next.js output", async () => {
  const config = await readProjectFile("netlify.toml");

  assert.match(config, /command = "npm run build"/);
  assert.match(config, /publish = "\.next"/);
  assert.match(config, /NODE_VERSION = "22\.13\.0"/);
  assert.match(config, /X-Content-Type-Options = "nosniff"/);
});
