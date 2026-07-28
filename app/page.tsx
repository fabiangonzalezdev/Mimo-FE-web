"use client";

import { useState } from "react";

const applicationGithub = "https://github.com/fabiangonzalezdev/Mimo-FE";
const websiteGithub = "https://github.com/fabiangonzalezdev/Mimo-FE-web";
const downloadUrl = `${applicationGithub}/releases`;
const wikiUrl = `${applicationGithub}/wiki`;
const supportUrl = `${applicationGithub}/issues`;

type ThemeId = "aqua" | "coral" | "yellow" | "violet";

const themes: Array<{ id: ThemeId; label: string }> = [
  { id: "aqua", label: "Aqua" },
  { id: "coral", label: "Coral" },
  { id: "yellow", label: "Butter yellow" },
  { id: "violet", label: "Violet" },
];

const releaseHighlights = [
  {
    symbol: "⌂",
    tone: "aqua",
    title: "A console-first home",
    copy: "A four-section floating dock, animated startup, local profiles, and a game mosaic designed for controllers and the couch.",
  },
  {
    symbol: "◇",
    tone: "coral",
    title: "A layout for every screen",
    copy: "Automatic, widescreen, tablet, phone, and classic 4:3 layouts keep every panel inside its own canvas.",
  },
  {
    symbol: "□",
    tone: "yellow",
    title: "Your library stays local",
    copy: "SQLite keeps browsing fast while an optional portable XML manifest keeps your order, profiles, and assets together.",
  },
  {
    symbol: "♫",
    tone: "violet",
    title: "Made to feel personal",
    copy: "Gamepad navigation, local artwork, editable tiles, ambient audio, floating shapes, and three interface languages.",
  },
];

const platforms = [
  {
    name: "macOS Apple Silicon",
    detail: ".app and .dmg",
    status: "Locally validated",
    symbol: "●",
  },
  {
    name: "macOS Intel",
    detail: ".app and .dmg",
    status: "CI package prepared",
    symbol: "○",
  },
  {
    name: "Windows 11",
    detail: ".msi and .exe",
    status: "CI package prepared",
    symbol: "▦",
  },
  {
    name: "Linux x64",
    detail: ".AppImage and .deb",
    status: "CI package prepared",
    symbol: "⌁",
  },
];

function MimoLogo({ size = "normal" }: { size?: "small" | "normal" | "large" }) {
  return (
    <span className={`mimo-logo mimo-logo-${size}`} aria-hidden="true">
      <span className="mimo-mark">
        <i />
        <i />
        <i />
        <i />
        <strong>M</strong>
      </span>
    </span>
  );
}

export default function Home() {
  const [theme, setTheme] = useState<ThemeId>("violet");
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  function chooseTheme(nextTheme: ThemeId) {
    setTheme(nextTheme);
    setThemeMenuOpen(false);
  }

  return (
    <main className="site-shell" data-theme={theme}>
      <div className="ambient-world" aria-hidden="true">
        <span className="ambient-symbol ambient-square" />
        <span className="ambient-symbol ambient-circle" />
        <span className="ambient-symbol ambient-triangle" />
        <span className="ambient-symbol ambient-plus">+</span>
        <span className="ambient-symbol ambient-diamond" />
        <span className="ambient-note ambient-note-one">♪</span>
        <span className="ambient-note ambient-note-two">♫</span>
        <span className="ambient-note ambient-note-three">♩</span>
      </div>

      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#top" aria-label="MIMO-FE home">
            <MimoLogo />
            <span className="brand-copy">
              <strong>MIMO-FE</strong>
              <small>Multi Interface Mega Orchestrator FrontEnd</small>
            </span>
          </a>

          <nav className="desktop-nav floating-control" aria-label="Main navigation">
            <a href="#release">Release</a>
            <a href="#download">Download</a>
            <a href={wikiUrl} target="_blank" rel="noreferrer">Wiki</a>
            <a href={supportUrl} target="_blank" rel="noreferrer">Support</a>
          </nav>

          <div className="header-actions">
            <div
              className="theme-control"
              onKeyDown={(event) => {
                if (event.key === "Escape") setThemeMenuOpen(false);
              }}
            >
              <button
                type="button"
                className="theme-trigger floating-control"
                aria-label="Choose interface color"
                aria-expanded={themeMenuOpen}
                aria-controls="theme-menu"
                onClick={() => setThemeMenuOpen((isOpen) => !isOpen)}
              >
                <span className={`active-color active-color-${theme}`} />
                <span className="theme-label">Color</span>
                <span aria-hidden="true">⌄</span>
              </button>

              {themeMenuOpen ? (
                <div className="theme-menu" id="theme-menu">
                  <span>Interface color</span>
                  <div className="theme-options" role="group" aria-label="Interface colors">
                    {themes.map((option) => (
                      <button
                        type="button"
                        className={`theme-option theme-option-${option.id}`}
                        aria-label={`Use ${option.label}`}
                        aria-pressed={theme === option.id}
                        onClick={() => chooseTheme(option.id)}
                        key={option.id}
                      >
                        <i aria-hidden="true" />
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            <a
              className="header-download floating-control"
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              <span className="header-download-label">Get the beta</span>
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <a className="release-pill floating-control" href="#release">
            <span className="release-note" aria-hidden="true">♪</span>
            <span>
              <strong>v0.2.0-beta.1</strong>
              <small>Desktop beta</small>
            </span>
            <span aria-hidden="true">→</span>
          </a>

          <p className="hero-kicker">YOUR GAMES · YOUR INTERFACE</p>
          <h1>
            A beautiful home
            <span>for every game.</span>
          </h1>
          <p className="hero-description">
            MIMO-FE brings your local game collection into a playful,
            controller-ready interface inspired by the console menus we grew
            up with.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary floating-control"
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download on GitHub
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-secondary floating-control"
              href={wikiUrl}
              target="_blank"
              rel="noreferrer"
            >
              Explore the wiki
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="hero-facts" aria-label="MIMO-FE highlights">
            <span><i className="fact-aqua" />Local-first</span>
            <span><i className="fact-coral" />Controller-ready</span>
            <span><i className="fact-yellow" />Cross-platform</span>
          </div>
        </div>

        <div className="console-preview" aria-label="MIMO-FE interface preview">
          <div className="preview-glow" aria-hidden="true" />
          <div className="preview-topbar">
            <MimoLogo size="small" />
            <div className="preview-title">
              <span>HOME</span>
              <strong>Your collection</strong>
            </div>
            <div className="preview-status">
              <span className="preview-music" aria-hidden="true">♪</span>
              <span><strong>23:38</strong><small>READY TO PLAY</small></span>
            </div>
          </div>

          <div className="preview-stage">
            <div className="preview-welcome">
              <span>WELCOME BACK</span>
              <strong>Choose a game</strong>
            </div>
            <div className="preview-grid" aria-hidden="true">
              <div className="preview-card preview-card-featured">
                <small>YOUR COLLECTION</small>
                <strong>Play what<br />you love.</strong>
                <span>CONTINUE&nbsp;&nbsp; →</span>
              </div>
              <div className="preview-card preview-card-aqua">
                <small>ADVENTURE</small>
                <b>△</b>
              </div>
              <div className="preview-card preview-card-coral">
                <small>ARCADE</small>
                <b>○</b>
              </div>
              <div className="preview-card preview-card-yellow">
                <small>CLASSICS</small>
                <b>□</b>
              </div>
              <div className="preview-card preview-card-violet">
                <small>RECENT</small>
                <b>◇</b>
              </div>
            </div>
          </div>

          <div className="preview-dock" aria-hidden="true">
            <span className="dock-item dock-item-active">⌂</span>
            <span className="dock-item">♠</span>
            <span className="dock-item">★</span>
            <span className="dock-item">⚙</span>
          </div>
        </div>
      </section>

      <section className="release-section" id="release">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Latest release · July 27, 2026</span>
            <h2>Meet the first MIMO-FE desktop beta.</h2>
          </div>
          <div className="version-badge floating-control">
            <span>VERSION</span>
            <strong>0.2.0-beta.1</strong>
            <small>Desktop beta</small>
          </div>
        </div>

        <div className="release-grid">
          {releaseHighlights.map((item) => (
            <article className="release-card floating-panel" key={item.title}>
              <span className={`release-symbol release-symbol-${item.tone}`} aria-hidden="true">
                {item.symbol}
              </span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="download-panel floating-panel">
          <div className="download-copy">
            <span className="eyebrow">Download now</span>
            <h2>Pick your system. Keep your library.</h2>
            <p>
              Preview builds and installers are published through the official
              MIMO-FE GitHub Releases page. Platform validation is still in
              progress while the project remains in beta.
            </p>
            <a
              className="button button-primary floating-control"
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open GitHub Releases
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="platform-list">
            {platforms.map((platform) => (
              <a
                href={downloadUrl}
                target="_blank"
                rel="noreferrer"
                className="platform-row"
                key={platform.name}
              >
                <span className="platform-symbol" aria-hidden="true">{platform.symbol}</span>
                <span className="platform-copy">
                  <strong>{platform.name}</strong>
                  <small>{platform.detail}</small>
                </span>
                <span className="platform-status">{platform.status}</span>
                <span className="platform-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="resources-section" id="resources">
        <div className="section-heading section-heading-simple">
          <div>
            <span className="eyebrow">Wiki · support · source</span>
            <h2>Everything you need, in the right place.</h2>
          </div>
        </div>

        <div className="resource-grid">
          <a className="resource-card floating-panel" href={wikiUrl} target="_blank" rel="noreferrer">
            <span className="resource-icon resource-icon-aqua" aria-hidden="true">?</span>
            <div>
              <span>DOCUMENTATION</span>
              <h3>Read the official MIMO-FE wiki.</h3>
              <p>Installation, first run, display layouts, controls, and architecture.</p>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
          <a className="resource-card floating-panel" href={supportUrl} target="_blank" rel="noreferrer">
            <span className="resource-icon resource-icon-yellow" aria-hidden="true">!</span>
            <div>
              <span>SUPPORT</span>
              <h3>Report a problem or share an idea.</h3>
              <p>Open an issue and help shape the next beta.</p>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
          <a className="resource-card floating-panel" href={applicationGithub} target="_blank" rel="noreferrer">
            <span className="resource-icon resource-icon-coral" aria-hidden="true">⌘</span>
            <div>
              <span>PROJECT</span>
              <h3>Follow development on GitHub.</h3>
              <p>Source, release notes, platform status, and project history.</p>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="closing-section">
        <MimoLogo size="large" />
        <span className="closing-note" aria-hidden="true">♪</span>
        <h2>Your collection has a new home.</h2>
        <p>Set it up once. Play it your way.</p>
        <div className="closing-actions">
          <a className="button button-primary floating-control" href={downloadUrl} target="_blank" rel="noreferrer">
            Download MIMO-FE <span aria-hidden="true">↗</span>
          </a>
          <a className="button button-secondary floating-control" href={wikiUrl} target="_blank" rel="noreferrer">
            Open the wiki <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <MimoLogo size="small" />
          <span className="brand-copy">
            <strong>MIMO-FE</strong>
            <small>Multi Interface Mega Orchestrator FrontEnd</small>
          </span>
        </a>
        <p>Local-first. Built for your games, your controllers, and your screen.</p>
        <div>
          <a href={wikiUrl} target="_blank" rel="noreferrer">Wiki</a>
          <a href={supportUrl} target="_blank" rel="noreferrer">Support</a>
          <a href={applicationGithub} target="_blank" rel="noreferrer">App GitHub</a>
          <a href={websiteGithub} target="_blank" rel="noreferrer">Website source</a>
        </div>
      </footer>

      <nav className="mobile-dock floating-control" aria-label="Mobile navigation">
        <a href="#top"><span aria-hidden="true">⌂</span><small>Home</small></a>
        <a href="#release"><span aria-hidden="true">◇</span><small>Release</small></a>
        <a href="#download"><span aria-hidden="true">↓</span><small>Download</small></a>
        <a href={wikiUrl} target="_blank" rel="noreferrer"><span aria-hidden="true">?</span><small>Wiki</small></a>
      </nav>
    </main>
  );
}
