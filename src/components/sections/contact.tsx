import { contactLabels, links, mail } from "@/data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t py-16 md:py-24"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="contact-title"
    >
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] xl:gap-16">
        <div>
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.22em]"
            style={{ color: "var(--text-faint)" }}
          >
            {contactLabels.sectionTitle}
          </p>

          <h2
            id="contact-title"
            className="font-display max-w-sm text-3xl leading-[0.95] md:text-5xl"
            style={{
              color: "var(--hero-display)",
            }}
          >
            {contactLabels.title}
          </h2>
        </div>

        <div>
          <p
            className="max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {contactLabels.description1}
          </p>

          <a
            href={mail.href}
            className="font-display mt-5 inline-block text-2xl transition-opacity duration-200 hover:opacity-60 md:text-4xl"
            style={{
              color: "var(--text)",
            }}
          >
            {mail.label}
          </a>

          <div className="mt-5 flex flex-wrap gap-6">
            {links.map((link) => {
              const Icon = link.icon;

              return (
                <div key={link.label} className="flex flex-col">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-60"
                    style={{ color: "var(--text)" }}
                  >
                    <Icon width={14} height={14} />
                    {link.label}
                  </a>

                  <p
                    className="mt-1 text-xs"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {link.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p
            className="mt-12 max-w-xl text-sm leading-7"
            style={{ color: "var(--text-faint)" }}
          >
            {contactLabels.description2}
          </p>
        </div>
      </div>
    </section>
  );
}
