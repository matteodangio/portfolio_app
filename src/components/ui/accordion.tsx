"use client";
import { useState } from "react";
import { AccordionItem } from "@/types";

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  function toggleRow(index: number) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map((item, index) => {
        const isOpen = expandedIndex === index;

        return (
          <div key={index} className="rounded-xl overflow-hidden">
            {/* Riga header — sempre visibile */}

            <button
              onClick={() => toggleRow(index)}
              className="w-full flex flex-row items-center justify-between gap-4 bg-violet-600 px-6 py-4 text-left hover:bg-violet-700 transition"
            >
              <span className="text-sm font-semibold text-white">
                {item.title} @ {item.subtitle}
              </span>
              <span className="text-white text-xl leading-none">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div className="bg-slate-800 px-6 py-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-xs text-white/50">
                    {item.prop1} · {item.prop2} · {item.prop3}
                  </p>
                </div>

                {item.description && (
                  <p className="text-sm text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                )}

                <div className="flex flex-row flex-wrap gap-2">
                  {item.chipsType1?.map((cItem1) => (
                    <span
                      key={cItem1}
                      className="rounded-full bg-violet-500/20 px-3 py-1 text-xs text-violet-300"
                    >
                      {cItem1}
                    </span>
                  ))}
                </div>

                <div className="flex flex-row flex-wrap gap-2">
                  {item.chipsType2?.map((cItem2) => (
                    <span
                      key={cItem2}
                      className="rounded-full bg-gray-600 px-3 py-1 text-xs text-violet-300"
                    >
                      {cItem2}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
