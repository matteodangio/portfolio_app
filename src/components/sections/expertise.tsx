// src/components/sections/Expertise.tsx
import { expertiseItems } from "@/data/expertise";

export default function Expertise() {
  return (
    <section id="expertise" className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Expertise</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {expertiseItems.map((item) => (
          <div
            key={item.title}
            className="flex flex-col gap-3 rounded-2xl border border-white/10 p-6 hover:bg-amber-50/5 transition"
          >
            <span className="text-2xl">{item.icon}</span>

            <div>
              <h3 className="text-base font-semibold text-white">
                {item.title}
              </h3>
              <p className="text-xs text-white/40 mt-0.5">{item.subtitle}</p>
            </div>

            <p className="text-sm text-white/60 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
