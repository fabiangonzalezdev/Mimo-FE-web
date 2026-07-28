import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f5f2ec",
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
    title: "MIMO-FE — Tu biblioteca, a tu manera",
    description:
      "Descarga MIMO-FE y sigue las novedades del frontend local para tu biblioteca de juegos.",
    metadataBase,
    openGraph: {
      title: "MIMO-FE — Tu biblioteca, a tu manera",
      description:
        "Un frontend local, personal y multiplataforma para tu biblioteca de juegos.",
      type: "website",
      locale: "es_AR",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: "MIMO-FE — Tu biblioteca, a tu manera",
      description:
        "Un frontend local, personal y multiplataforma para tu biblioteca de juegos.",
      images: ["/og.png"],
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
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
