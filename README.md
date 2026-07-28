# MIMO-FE Web

The official website for **MIMO-FE — Multi Interface Mega Orchestrator FrontEnd**.
It brings together project updates, downloads, documentation, and support in one
simple, direct landing page.

## Live site

[mimo-fe.fabiangonzalezdev.chatgpt.site](https://mimo-fe.fabiangonzalezdev.chatgpt.site)

## What it includes

- a clear introduction to MIMO-FE;
- highlights from the latest release;
- download links for macOS, Windows, and Linux;
- direct access to documentation, support, and the application repository;
- responsive layouts, a fixed desktop navigation bar, and a custom social card.

## Local development

Requires Node.js `22.13.0` or later.

```bash
npm install
npm run dev
```

The local site will be available at `http://localhost:3000`.

## Validation

```bash
npm run build
npm test
```

## Main structure

```text
app/
  page.tsx       landing page content
  layout.tsx     metadata and global configuration
  globals.css    visual system and responsive styles
public/
  mimo-mark.svg  MIMO-FE brand mark
  og.png         social sharing card
```

## Related projects

- [MIMO-FE](https://github.com/fabiangonzalezdev/Mimo-FE): desktop application and downloads.
- [MIMO-FE Web](https://github.com/fabiangonzalezdev/Mimo-FE-web): release, download, documentation, and support website.

## Content and privacy

MIMO-FE organizes local libraries configured by each user. It does not include
or distribute ROMs, BIOS files, cores, emulators, or copyrighted game content.
