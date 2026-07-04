import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy note for Matteo Dangio portfolio: no analytics, profiling cookies or advertising trackers.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-6 py-12 md:px-8 md:py-16">
      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] transition-opacity hover:opacity-60"
        style={{ color: "var(--text-faint)" }}
      >
        <ArrowLeft size={14} />
        Back home
      </Link>

      <section
        className="border-t pt-10 md:pt-14"
        style={{ borderColor: "var(--border)" }}
        aria-labelledby="privacy-title"
      >
        <p
          className="mb-4 text-xs font-medium uppercase tracking-[0.22em]"
          style={{ color: "var(--text-faint)" }}
        >
          Privacy note
        </p>

        <h1
          id="privacy-title"
          className="font-display max-w-3xl text-4xl leading-[0.95] md:text-6xl"
          style={{ color: "var(--hero-display)" }}
        >
          No tracking, no analytics.
        </h1>

        <div className="mt-10 grid gap-8 text-sm leading-7 md:text-base md:leading-8">
          <p style={{ color: "var(--text-muted)" }}>
            This website is a personal portfolio. It does not use analytics,
            advertising trackers, profiling cookies, contact forms, or marketing
            pixels.
          </p>

          <div>
            <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>
              Local preferences
            </h2>
            <p className="mt-3" style={{ color: "var(--text-muted)" }}>
              The site may store a local theme preference so the selected visual
              mode can be remembered. This preference is used only for the
              interface and is not used to identify or profile visitors.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold" style={{ color: "var(--text)" }}>
              External links
            </h2>
            <p className="mt-3" style={{ color: "var(--text-muted)" }}>
              Links to GitHub, LinkedIn, or email clients are handled by their
              respective providers. Their privacy practices are outside this
              website.
            </p>
          </div>

          <p
            className="text-xs leading-6"
            style={{ color: "var(--text-faint)" }}
          >
            Last updated: July 4, 2026.
          </p>
        </div>
      </section>
    </main>
  );
}
