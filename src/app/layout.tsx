import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";
import { satoshi, zodiak } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://matteodangio.com"),
  title: {
    default: "Matteo Dangio — Frontend Engineer",
    template: "%s — Matteo Dangio",
  },
  description:
    "Frontend Engineer specialized Angular. Building clear, maintainable and user-focused digital products with strong attention to interface quality and frontend architecture",
  keywords: [
    "Frontend Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Angular",
    "TypeScript",
    "RxJS",
    "UI Engineering",
    "Design Systems",
    "Frontend Architecture",
    "Portfolio",
  ],
  authors: [{ name: "Matteo Dangio" }],
  creator: "Matteo Dangio",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Matteo Dangio — Frontend Engineer",
    siteName: "Matteo Dangio",
    description:
      "Frontend engineer building sharp, clear and useful digital products.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Matteo Dangio Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Matteo Dangio — Frontend Engineer",
    description:
      "Frontend engineer building sharp, clear and useful digital products.",
    images: ["/og-image.png"],
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
  verification: {
    google: "...",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
  applicationName: "Matteo Dangio Portfolio",
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
      className={`${satoshi.variable} ${zodiak.variable}`}
    >
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
