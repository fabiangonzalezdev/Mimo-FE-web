const githubBase = "https://github.com/fabiangonzalezdev/Mico-FE";

const releaseHighlights = [
  {
    number: "01",
    title: "Una app de escritorio real",
    copy: "La interfaz React ahora vive dentro de Tauri 2, lista para generar instaladores de macOS y Windows.",
  },
  {
    number: "02",
    title: "Tu biblioteca sigue siendo tuya",
    copy: "SQLite acelera el catálogo y un manifiesto XML portable mantiene juegos, orden, perfiles y assets juntos.",
  },
  {
    number: "03",
    title: "Una interfaz más personal",
    copy: "Reordena juegos, cambia el tamaño de cada tarjeta, elige bordes, portadas, fondos, logos y avatar.",
  },
  {
    number: "04",
    title: "Más formas de jugar",
    copy: "Navegación con mando, idiomas locales y conexión opcional y segura con RetroAchievements.",
  },
];

const platforms = [
  { name: "macOS", detail: ".app y .dmg", status: "Build configurado" },
  { name: "Windows 11", detail: ".msi y .exe", status: "Build configurado" },
  { name: "Linux", detail: "Desde el código fuente", status: "En preparación" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="MIMO-FE, inicio">
          <img src="/mimo-mark.svg" alt="" width="34" height="34" />
          <span>MIMO-FE</span>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#release">Novedades</a>
          <a href="#download">Descarga</a>
          <a href="#resources">Wiki</a>
          <a href="#resources">Soporte</a>
        </nav>

        <a className="header-cta" href="#download">
          Descargar
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <a className="release-pill" href="#release">
            <span>Nueva versión</span>
            v0.1.0 Preview
            <span aria-hidden="true">→</span>
          </a>
          <h1>
            Tu biblioteca.
            <br />
            <em>Tu manera.</em>
          </h1>
          <p>
            MIMO-FE organiza y abre tu colección local de juegos desde una
            interfaz pensada para el sofá, el mando y tu propio estilo.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#download">
              Descargar ahora
              <span aria-hidden="true">↓</span>
            </a>
            <a className="button button-quiet" href="#release">
              Ver qué cambió
            </a>
          </div>
          <p className="privacy-note">
            Gratis y local. MIMO-FE no incluye ROMs, BIOS, cores ni emuladores.
          </p>
        </div>

        <div className="product-shot" aria-label="Vista previa de MIMO-FE">
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
            <span className="eyebrow">Últimos cambios · 27 Jul 2026</span>
            <h2>0.1.0 Preview</h2>
          </div>
          <p>
            MIMO-FE dejó de ser una demo web y se convirtió en una aplicación
            local multiplataforma, sin perder la biblioteca existente.
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
          <h2>Elige tu sistema y empieza.</h2>
          <p>
            Los instaladores se publican en GitHub. La versión Preview está
            pensada para probar, compartir feedback y acompañar el desarrollo.
          </p>
          <a
            className="button button-light"
            href={`${githubBase}/releases`}
            target="_blank"
            rel="noreferrer"
          >
            Abrir descargas
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="platform-list">
          {platforms.map((platform) => (
            <a
              href={`${githubBase}/releases`}
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
            <span className="eyebrow">Ayuda y documentación</span>
            <h2>Todo lo necesario. Nada más.</h2>
          </div>
        </div>

        <div className="resource-grid">
          <a
            className="resource-card"
            href={`${githubBase}#readme`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="resource-icon" aria-hidden="true">?</span>
            <div>
              <span>WIKI</span>
              <h3>Instalación, configuración y arquitectura.</h3>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
          <a
            className="resource-card"
            href={`${githubBase}/issues`}
            target="_blank"
            rel="noreferrer"
          >
            <span className="resource-icon support" aria-hidden="true">!</span>
            <div>
              <span>SUPPORT</span>
              <h3>Reporta un problema o comparte una idea.</h3>
            </div>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="closing-section">
        <img src="/mimo-mark.svg" alt="" width="72" height="72" />
        <h2>Tu colección ya tiene casa.</h2>
        <p>Configúrala una vez. Juega como quieras.</p>
        <a className="button button-primary" href="#download">
          Descargar MIMO-FE
        </a>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top">
          <img src="/mimo-mark.svg" alt="" width="28" height="28" />
          <span>MIMO-FE</span>
        </a>
        <p>Multi Interface Mega Orchestrator FrontEnd</p>
        <div>
          <a href={`${githubBase}#readme`} target="_blank" rel="noreferrer">
            Wiki
          </a>
          <a href={`${githubBase}/issues`} target="_blank" rel="noreferrer">
            Soporte
          </a>
          <a href={githubBase} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
