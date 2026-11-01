import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { satoshi, zodiak } from "@/lib/fonts";
import { siteConfig } from "@/data/site";
import { desktopNavStyle } from "@/data/navigation";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s — Matteo Dangiò",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: siteConfig.shortTitle,
    siteName: siteConfig.name,
    description: siteConfig.ogDescription,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.shortTitle,
    description: siteConfig.twitterDescription,
    images: [siteConfig.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
  applicationName: `${siteConfig.name} Portfolio`,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
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
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      data-desktop-nav={desktopNavStyle}
      className={`${satoshi.variable} ${zodiak.variable}`}
    >
      <body>
        <a href="#about" className="skip-link">
          Skip to content
        </a>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
