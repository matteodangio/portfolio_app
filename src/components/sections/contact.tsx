import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Contact() {
  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/matteo-dangio",
      icon: "",
    },
    {
      label: "GitHub",
      href: "https://github.com/matteodangio",
      icon: "",
    },
  ];

  const mail = { label: "matteo@example.it", href: "mailto:matteo@example.it" };

  const contactLabels = {
    sectionTitle: "Contact",
    title: " Let’s build something clear, sharp, and useful.",
    description1: `I’m interested in frontend roles, product-driven teams, and projects
            where interface quality and system thinking genuinely matter.`,
    description2: `Available for selected opportunities, collaborations, and product
            conversations.`,
  };

  return (
    <section
      id="contact"
      className="border-t py-20 md:py-28"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="contact-title"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.22em]"
            style={{ color: "var(--text-faint)" }}
          >
            {contactLabels.sectionTitle}
          </p>

          <h2
            id="contact-title"
            className="max-w-sm text-3xl leading-[0.95] md:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
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

          <div className="mt-10">
            <a
              href={mail.href}
              className="inline-block text-2xl leading-tight transition-opacity duration-200 hover:opacity-60 md:text-4xl"
              style={{
                color: "var(--text)",
                fontFamily: "var(--font-display)",
              }}
            >
              {mail.label}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium uppercase tracking-[0.14em] transition-opacity duration-200 hover:opacity-60"
                style={{ color: "var(--text)" }}
              >
                {link.icon ? link.icon : link.label}
              </a>
            ))}
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
