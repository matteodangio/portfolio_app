import { contactLabels, links, mail } from "@/data/contact";

const MailIcon = mail.icon;

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t py-20 md:py-32"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="contact-title"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <p
          className="mb-5 text-xs font-medium uppercase tracking-[0.22em]"
          style={{ color: "var(--text-faint)" }}
        >
          {contactLabels.sectionTitle}
        </p>

        <h2
          id="contact-title"
          className="font-display text-4xl leading-[0.95] md:text-6xl"
          style={{ color: "var(--hero-display)" }}
        >
          {contactLabels.title}
        </h2>

        <p
          className="mt-8 max-w-2xl text-base leading-8 md:text-lg"
          style={{ color: "var(--text-muted)" }}
        >
          {contactLabels.description1}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={mail.href}
            className="inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-80"
            style={{ background: "var(--text)", color: "var(--bg)" }}
          >
            <MailIcon width={16} height={16} aria-hidden="true" />
            {mail.label}
          </a>

          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-medium uppercase tracking-[0.14em] transition-colors duration-200 hover:bg-[var(--surface-2)]"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                <Icon width={15} height={15} aria-hidden="true" />
                {link.label}
              </a>
            );
          })}
        </div>

        <p
          className="mt-10 max-w-xl text-sm leading-7"
          style={{ color: "var(--text-faint)" }}
        >
          {contactLabels.description2}
        </p>
      </div>
    </section>
  );
}
