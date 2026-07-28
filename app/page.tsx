const applicationGithub = "https://github.com/fabiangonzalezdev/Mimo-FE";
const websiteGithub = "https://github.com/fabiangonzalezdev/Mimo-FE-web";
const downloadUrl = `${applicationGithub}/releases`;

const releaseHighlights = [
  {
    number: "01",
    title: "A real desktop app",
    copy: "The React interface now runs inside Tauri 2, ready for native macOS and Windows installers.",
  },
  {
    number: "02",
    title: "Your library stays yours",
    copy: "SQLite keeps the catalog fast while a portable XML manifest keeps games, order, profiles, and assets together.",
  },
  {
    number: "03",
    title: "A more personal interface",
    copy: "Reorder games, resize every tile, and choose the borders, artwork, backgrounds, logos, and avatar you want.",
  },
  {
    number: "04",
    title: "More ways to play",
    copy: "Controller-first navigation, local language catalogs, and an optional secure RetroAchievements connection.",
  },
];

const platforms = [
  { name: "macOS", detail: ".app and .dmg", status: "Build pipeline ready" },
  { name: "Windows 11", detail: ".msi and .exe", status: "Build pipeline ready" },
  { name: "Linux", detail: "Build from source", status: "In progress" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MIMO-FE home">
          <img src="/mimo-mark.svg" alt="" width="34" height="34" />
          <span>MIMO-FE</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#release">Release</a>
          <a href="#download">Download</a>
          <a href="#resources">Docs</a>
          <a href="#resources">Support</a>
        </nav>

        <a
          className="header-cta"
          href={downloadUrl}
          target="_blank"
          rel="noreferrer"
        >
          Download
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <a className="release-pill" href="#release">
            <span>New release</span>
            v0.1.0 Preview
            <span aria-hidden="true">→</span>
          </a>
          <h1>
            Your library.
            <br />
            <em>Your way.</em>
          </h1>
          <p>
            MIMO-FE organizes and launches your local game collection through
            an interface built for the couch, your controller, and your style.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
            >
              Download on GitHub
              <span aria-hidden="true">↗</span>
            </a>
            <a className="button button-quiet" href="#release">
              See what changed
            </a>
          </div>
          <p className="privacy-note">
            Free and local. MIMO-FE does not include ROMs, BIOS files, cores, or
            emulators.
          </p>
        </div>

        <div className="product-shot" aria-label="MIMO-FE interface preview">
          <div className="shot-bar">
            <div className="shot-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <span>MIMO-FE · HOME</span>
            <span className="shot-time">21:42</span>
          </div>
          <div className="shot-layout">
            <aside className="shot-sidebar" aria-hidden="true">
              <img src="/mimo-mark.svg" alt="" width="42" height="42" />
              <span className="sidebar-item active">⌂</span>
              <span className="sidebar-item">◇</span>
              <span className="sidebar-item">☆</span>
              <span className="sidebar-item">⚙</span>
            </aside>
            <div className="shot-content">
              <div className="shot-heading">
                <div>
                  <span>WELCOME BACK</span>
                  <strong>Choose a game</strong>
                </div>
                <span className="profile-dot">FG</span>
              </div>
              <div className="game-grid" aria-hidden="true">
                <div className="game-card game-featured">
                  <span>YOUR COLLECTION</span>
                  <strong>Play what you love.</strong>
                  <i />
                </div>
                <div className="game-card game-mint">
                  <span>ADVENTURE</span>
                  <b>△</b>
                </div>
                <div className="game-card game-lavender tall">
                  <span>ARCADE</span>
                  <b>○</b>
                </div>
                <div className="game-card game-yellow">
                  <span>CLASSICS</span>
                  <b>□</b>
                </div>
                <div className="game-card game-coral">
                  <span>RECENT</span>
                  <b>◇</b>
                </div>
              </div>
              <div className="shot-footer">
                <span><kbd>A</kbd> Select</span>
                <span><kbd>B</kbd> Back</span>
                <span>5 games ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="release-section" id="release">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Latest changes · July 27, 2026</span>
            <h2>0.1.0 Preview</h2>
          </div>
          <p>
            MIMO-FE has moved beyond its web demo and become a local,
            cross-platform desktop application without leaving your existing
            library behind.
          </p>
        </div>

        <div className="release-grid">
          {releaseHighlights.map((item) => (
            <article className="release-item" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="download-section" id="download">
        <div className="download-copy">
          <span className="eyebrow">Download now</span>
          <h2>Choose your platform and get started.</h2>
          <p>
            Installers and preview builds are published in the official MIMO-FE
            GitHub repository. Follow the project there for every new release.
          </p>
          <a
            className="button button-light"
            href={downloadUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open GitHub downloads
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
              <span className="platform-symbol" aria-hidden="true">
                {platform.name === "macOS"
                  ? "●"
                  : platform.name === "Windows 11"
                    ? "▦"
                    : "⌁"}
              </span>
              <span>
                <strong>{platform.name}</strong>
                <small>{platform.detail}</small>
              </span>
              <span className="platform-status">{platform.status}</span>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      </section>

      <section className="resources-section" id="resources">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow">Help and documentation</span>
            <h2>Everything you need. Nothing extra.</h2>
          </div>
        </div>

        <div className="resource-grid">
          <a
            className="resource-card"
            href={`${applicationGithub}#readme`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="resource-icon" aria-hidden="true">?</span>
            <div>
              <span>DOCUMENTATION</span>
              <h3>Installation, setup, and architecture.</h3>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="resource-card"
            href={`${applicationGithub}/issues`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="resource-icon support" aria-hidden="true">!</span>
            <div>
              <span>SUPPORT</span>
              <h3>Report a problem or share an idea.</h3>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="closing-section">
        <img src="/mimo-mark.svg" alt="" width="72" height="72" />
        <h2>Your collection has a new home.</h2>
        <p>Set it up once. Play it your way.</p>
        <a
          className="button button-primary"
          href={downloadUrl}
          target="_blank"
          rel="noreferrer"
        >
          Download MIMO-FE
          <span aria-hidden="true">↗</span>
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <img src="/mimo-mark.svg" alt="" width="28" height="28" />
          <span>MIMO-FE</span>
        </a>
        <p>Multi Interface Mega Orchestrator FrontEnd</p>
        <div>
          <a href={`${applicationGithub}#readme`} target="_blank" rel="noreferrer">
            Docs
          </a>
          <a href={`${applicationGithub}/issues`} target="_blank" rel="noreferrer">
            Support
          </a>
          <a href={applicationGithub} target="_blank" rel="noreferrer">
            App GitHub
          </a>
          <a href={websiteGithub} target="_blank" rel="noreferrer">
            Website source
          </a>
        </div>
      </footer>
    </main>
  );
}
