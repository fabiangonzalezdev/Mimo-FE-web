import type { Metadata, Viewport } from "next";
import "./globals.css";

const metadataBase = new URL(
  process.env.DEPLOY_PRIME_URL ??
    process.env.URL ??
    "http://localhost:3000",
);

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export const metadata: Metadata = {
  title: "MIMO-FE — A beautiful home for every game",
  description:
    "Download MIMO-FE, explore its console-inspired interface, and follow the latest desktop beta.",
  metadataBase,
  openGraph: {
    title: "MIMO-FE — A beautiful home for every game",
    description:
      "A local-first, controller-ready, and cross-platform frontend for your game library.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/og-console.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MIMO-FE — A beautiful home for every game",
    description:
      "A local-first, controller-ready, and cross-platform frontend for your game library.",
    images: ["/og-console.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
