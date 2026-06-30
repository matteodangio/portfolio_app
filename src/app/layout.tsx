import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";

export const metadata: Metadata = {
  metadataBase: new URL("https://matteodangio.dev"),
  title: {
    default: "Matteo Dangio — Frontend Engineer",
    template: "%s — Matteo Dangio",
  },
  description:
    "Frontend engineer building sharp, clear and useful digital products. Focused on interface quality, design systems and product thinking.",
  keywords: [
    "frontend engineer",
    "frontend developer",
    "React",
    "Next.js",
    "design systems",
    "UI engineering",
    "portfolio",
  ],
  authors: [{ name: "Matteo D'Angio" }],
  creator: "Matteo D'Angio",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Matteo Dangio — Frontend Engineer",
    description:
      "Frontend engineer building sharp, clear and useful digital products.",
    siteName: "Matteo Dangio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matteo Dangio — Frontend Engineer",
    description:
      "Frontend engineer building sharp, clear and useful digital products.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
    { media: "(prefers-color-scheme: light)", color: "#e4ddd2" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=zodiak@400,500,600,700&f[]=satoshi@300,400,500,700&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
