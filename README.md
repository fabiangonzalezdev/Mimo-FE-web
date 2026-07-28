# MIMO-FE Web

The official website for **MIMO-FE — Multi Interface Mega Orchestrator FrontEnd**.
It brings together project updates, downloads, documentation, and support in one
simple, direct landing page.

## Current preview

[mimo-fe.fabiangonzalezdev.chatgpt.site](https://mimo-fe.fabiangonzalezdev.chatgpt.site)

## What it includes

- the official MIMO-FE four-color console identity and rounded interface typography;
- a white-first responsive layout with floating controls and panels;
- an interactive aqua, coral, butter-yellow, and violet theme menu;
- subtle blurred geometric shapes and musical notes inspired by the application;
- highlights from the `v0.2.0-beta.1` desktop beta;
- download links for macOS, Windows, and Linux;
- direct access to the [official wiki](https://github.com/fabiangonzalezdev/Mimo-FE/wiki), support, releases, and source;
- fixed desktop navigation, a mobile console dock, and a custom social card.

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/fabiangonzalezdev/Mimo-FE-web)

The production settings are versioned in [`netlify.toml`](./netlify.toml):

- build command: `npm run build`;
- publish directory: `out`;
- Node.js: `22.13.0`;
- delivery mode: fully static Next.js export (no server runtime required).

To publish manually in the Netlify dashboard:

1. Choose **Add new project** and **Import an existing project**.
2. Connect GitHub and select `fabiangonzalezdev/Mimo-FE-web`.
3. Keep the detected settings from `netlify.toml`.
4. Confirm that the publish directory is `out`.
5. Select **Deploy**. The generated Netlify URL is public by default.

If the Netlify project was created before this configuration, open **Project
configuration → Build & deploy → Continuous deployment → Build settings**, leave
the base directory empty, use `npm run build`, set the publish directory to
`out`, and redeploy the latest commit from `main`.

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
  page.tsx       landing page, color menu, console preview, and content
  layout.tsx     metadata and global configuration
  globals.css    MIMO-FE palette, floating UI, animation, and responsive styles
public/
  og-console.png social sharing card for the console redesign
netlify.toml      production deployment configuration
CHANGELOG.md      public release notes
```

## Related projects

- [MIMO-FE](https://github.com/fabiangonzalezdev/Mimo-FE): desktop application and downloads.
- [MIMO-FE Wiki](https://github.com/fabiangonzalezdev/Mimo-FE/wiki): official installation and usage documentation.
- [MIMO-FE Web](https://github.com/fabiangonzalezdev/Mimo-FE-web): release, download, documentation, and support website.

## Content and privacy

MIMO-FE organizes local libraries configured by each user. It does not include
or distribute ROMs, BIOS files, cores, emulators, or copyrighted game content.
