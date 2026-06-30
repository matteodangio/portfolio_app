export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t px-4 py-6 md:px-6 md:py-8"
      style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs uppercase tracking-[0.18em] md:flex-row md:items-center md:justify-between">
        <p>Designed, coded and caffeinated by Matteo Dangiò</p>

        <p aria-label={`Copyright ${year}`}>© {year}</p>
      </div>
    </footer>
  );
}
