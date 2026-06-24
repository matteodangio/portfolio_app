export default function Contact() {
  return (
    <section id="contact" className="p-8">
      <div className="rounded-2xl border border-white/10 p-6 sm:p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">
          Contact
        </p>

        <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-4">
          Let’s build something thoughtful.
        </h2>

        <p className="max-w-2xl text-sm sm:text-base leading-relaxed text-white/60 mb-8">
          I’m interested in frontend engineering roles, product-focused teams,
          where code, UX, and visual quality matter.
        </p>

        <div className="flex flex-col gap-3 text-sm sm:text-base">
          <a
            href="mailto:tua-email@example.com"
            className="text-white underline underline-offset-4 hover:text-white/70 transition"
          >
            tua-email@example.com
          </a>

          <a
            href="https://www.linkedin.com/in/matteo-dangio"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn profile in a new tab"
            className="text-white/70 hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/tuo-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub profile in a new tab"
            className="text-white/70 hover:text-white transition"
          >
            GitHub
          </a>

          <p className="text-white/40">Milan, Italy</p>
        </div>
      </div>
    </section>
  );
}
