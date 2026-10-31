"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const ANCHOR_RATIO = 0.3;

/**
 * Tracks which section is currently "active": the last one whose top has
 * crossed 30% of the viewport. While a smooth scroll triggered by `goTo` is
 * in flight the target stays active, so the highlight does not flicker
 * through the sections in between.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  const targetRef = useRef<string | null>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const anchor = window.innerHeight * ANCHOR_RATIO;
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (targetRef.current) {
        const target = document.getElementById(targetRef.current);
        const arrived =
          atBottom || (target && target.getBoundingClientRect().top <= anchor);
        if (!arrived) return;
        targetRef.current = null;
      }

      let current = ids[0] ?? "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= anchor) current = id;
      }
      setActive(atBottom ? (ids[ids.length - 1] ?? current) : current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids]);

  const goTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    targetRef.current = id;
    setActive(id);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return { active, goTo };
}
