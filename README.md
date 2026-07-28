# MIMO-FE Web

Sitio oficial de **MIMO-FE — Multi Interface Mega Orchestrator FrontEnd**.
Reúne las novedades del proyecto, el acceso a descargas, la documentación y los
canales de soporte en una página simple y directa.

## Sitio

[mimo-fe.fabiangonzalezdev.chatgpt.site](https://mimo-fe.fabiangonzalezdev.chatgpt.site)

## Qué incluye

- presentación de MIMO-FE y su propuesta;
- novedades de la última versión;
- acceso a builds para macOS, Windows y Linux;
- enlaces a la wiki, soporte y repositorio principal;
- diseño responsive y tarjeta social propia.

## Desarrollo local

Requiere Node.js `22.13.0` o posterior.

```bash
npm install
npm run dev
```

La vista local estará disponible en `http://localhost:3000`.

## Validación

```bash
npm run build
npm test
```

## Estructura principal

```text
app/
  page.tsx       contenido de la landing
  layout.tsx     metadatos y configuración general
  globals.css    sistema visual y responsive
public/
  mimo-mark.svg  marca de MIMO-FE
  og.png         tarjeta para compartir enlaces
```

## Proyectos relacionados

- [MIMO-FE](https://github.com/fabiangonzalezdev/Mico-FE): aplicación de escritorio.
- [MIMO-FE Web](https://github.com/fabiangonzalezdev/Mimo-FE-web): sitio de novedades, descargas y soporte.

## Contenido y privacidad

MIMO-FE organiza bibliotecas locales configuradas por cada usuario. No incluye
ni distribuye ROMs, BIOS, cores, emuladores o material protegido.
