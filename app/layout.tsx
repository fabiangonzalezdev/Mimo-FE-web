import type { Metadata, Viewport } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("host") ?? "localhost:3000";
  const forwardedProtocol = headerList.get("x-forwarded-proto");
  const protocol =
    forwardedProtocol ?? (host.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
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
}

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
