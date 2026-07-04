import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t px-4 py-6 md:px-6 md:py-8"
      style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-xs uppercase tracking-[0.18em] md:flex-row md:items-center md:justify-between">
        <p>Designed, coded and caffeinated by Matteo Dangiò</p>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            href="/privacy"
            className="transition-opacity duration-200 hover:opacity-60"
          >
            Privacy
          </Link>
          <p aria-label={`Copyright ${year}`}>© {year}</p>
        </div>
      </div>
    </footer>
  );
}
