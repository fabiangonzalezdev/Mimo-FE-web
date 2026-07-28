# MIMO-FE Web

The official website for **MIMO-FE — Multi Interface Mega Orchestrator FrontEnd**.
It brings together project updates, downloads, documentation, and support in one
simple, direct landing page.

## Current preview

[mimo-fe.fabiangonzalezdev.chatgpt.site](https://mimo-fe.fabiangonzalezdev.chatgpt.site)

## What it includes

- a clear introduction to MIMO-FE;
- highlights from the latest release;
- download links for macOS, Windows, and Linux;
- direct access to documentation, support, and the application repository;
- responsive layouts, a fixed desktop navigation bar, and a custom social card.

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/fabiangonzalezdev/Mimo-FE-web)

The production settings are versioned in [`netlify.toml`](./netlify.toml):

- build command: `npm run build`;
- publish directory: `.next`;
- Node.js: `22.13.0`;
- Next.js support: Netlify's current OpenNext-based runtime.

To publish manually in the Netlify dashboard:

1. Choose **Add new project** and **Import an existing project**.
2. Connect GitHub and select `fabiangonzalezdev/Mimo-FE-web`.
3. Keep the detected settings from `netlify.toml`.
4. Select **Deploy**. The generated Netlify URL is public by default.

No application secrets or environment variables are required for this site.
The source repository can remain private as long as Netlify has GitHub access.

## Local development

Requires Node.js `22.13.0` or later.

```bash
npm install
npm run dev
```

The local site will be available at `http://localhost:3000`.

The existing Sites-compatible runtime remains available through:

```bash
npm run dev:sites
```

## Validation

```bash
npm run lint
npm run build
npm test
```

`npm run build` validates the Netlify production build. `npm test` also builds
the Sites-compatible output and checks the rendered landing page and release
configuration.

## Main structure

```text
app/
  page.tsx       landing page content
  layout.tsx     metadata and global configuration
  globals.css    visual system and responsive styles
public/
  mimo-mark.svg  MIMO-FE brand mark
  og.png         social sharing card
netlify.toml      production deployment configuration
CHANGELOG.md      public release notes
```

## Related projects

- [MIMO-FE](https://github.com/fabiangonzalezdev/Mimo-FE): desktop application and downloads.
- [MIMO-FE Web](https://github.com/fabiangonzalezdev/Mimo-FE-web): release, download, documentation, and support website.

## Content and privacy

MIMO-FE organizes local libraries configured by each user. It does not include
or distribute ROMs, BIOS files, cores, emulators, or copyrighted game content.
