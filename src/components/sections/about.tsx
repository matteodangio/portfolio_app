import { aboutLabels, focusItems } from "@/data/about";
import { IFocusItem } from "@/types";

export default function About() {
  const items: IFocusItem[] = focusItems;

  return (
    <section
      id="about"
      className="border-t py-20 md:py-28"
      style={{ borderColor: "var(--border)" }}
      aria-labelledby="about-title"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p
            className="mb-4 text-xs font-medium uppercase tracking-[0.22em]"
            style={{ color: "var(--text-faint)" }}
          >
            {aboutLabels.sectionTitle}
          </p>

          <h2
            id="about-title"
            className="max-w-sm text-3xl leading-[0.95] md:text-5xl"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--hero-display)",
            }}
          >
            {aboutLabels.title}
          </h2>

          <div
            className="mt-8 overflow-hidden rounded-[1.75rem] border"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <div
              className="aspect-4/5 w-full"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in srgb, var(--accent) 18%, var(--surface)) 0%, var(--surface-2) 100%)",
              }}
            />
          </div>
        </div>

        <div>
          <p
            className="max-w-2xl text-base leading-8 md:text-lg"
            style={{ color: "var(--text-muted)" }}
          >
            {aboutLabels.description1}
          </p>

          <p
            className="mt-6 max-w-2xl text-base leading-8"
            style={{ color: "var(--text-muted)" }}
          >
            {aboutLabels.description2}
          </p>

          {/* CARDS - COMMENTED */}
          {/* <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {cardLabel.map((card) => {
              return (
                <div
                  className="rounded-[1.5rem] border p-5"
                  style={{
                    borderColor: "var(--border)",
                    background:
                      "color-mix(in srgb, var(--surface) 78%, transparent)",
                  }}
                >
                  <p
                    className="text-xs font-medium uppercase tracking-[0.16em]"
                    style={{ color: "var(--text-faint)" }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="mt-3 text-lg leading-tight"
                    style={{ color: "var(--text)" }}
                  >
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div> */}

          <div
            className="mt-14 border-t pt-8"
            style={{ borderColor: "var(--border)" }}
          >
            <p
              className="mb-6 text-xs font-medium uppercase tracking-[0.22em]"
              style={{ color: "var(--text-faint)" }}
            >
              {aboutLabels.subtitle1}
            </p>

            <div className="flex flex-col">
              {focusItems.map((item, index) => (
                <article
                  key={item.title}
                  className="grid grid-cols-1 gap-5 border-t py-8 md:grid-cols-[72px_minmax(0,1fr)] md:gap-8"
                  style={{
                    borderColor:
                      index === 0 ? "var(--border)" : "var(--border)",
                  }}
                >
                  <div>
                    <span
                      className="text-xs font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--text-faint)" }}
                    >
                      {item.index}
                    </span>
                  </div>

                  <div>
                    <h3
                      className="text-2xl leading-tight md:text-3xl"
                      style={{
                        color: "var(--text)",
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      className="mt-4 max-w-2xl text-base leading-8"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
