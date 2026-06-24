"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavState = "hero-open" | "compact-closed" | "compact-open";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function SiteNav() {
  const [navState, setNavState] = useState<NavState>("hero-open");

  useEffect(() => {
    const heroSection = document.getElementById("hero");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const heroVisible = entry.isIntersecting;
        setNavState((prev) => {
          if (!heroVisible && prev === "hero-open") return "compact-closed";
          if (heroVisible) return "hero-open";
          return prev;
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(heroSection);
    return () => observer.unobserve(heroSection);
  }, []);

  function openCompactMenu() {
    setNavState("compact-open");
  }

  function closeCompactMenu() {
    setNavState("compact-closed");
  }

  function handleNavItemClick() {
    setNavState("compact-closed");
  }

  return (
    <>
      {/* STATO 1: hero-open — menu grande nella hero */}

      {navState === "hero-open" && (
        <nav className="inset-0 z-50 flex flex-col">
          <div className="flex flex-col gap-2 justify-center items-center">
            <ul className="flex flex-col gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={handleNavItemClick}
                    className="block text-4xl font-bold text-white uppercase tracking-tight hover:text-white/60 transition"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}

      {/* STATO 2: compact-closed — solo il trigger hamburger */}
      {navState === "compact-closed" && (
        <button
          onClick={openCompactMenu}
          className="fixed top-6 right-6 z-50 rounded-full bg-white/10 backdrop-blur px-4 py-2 text-sm text-white hover:bg-white/20 transition"
        >
          Menu
        </button>
      )}

      {/* STATO 3: compact-open — pannello overlay */}
      {navState === "compact-open" && (
        <nav className="fixed inset-0 z-50 flex flex-col p-8 bg-black/90 backdrop-blur">
          <button
            onClick={closeCompactMenu}
            className="self-end text-sm text-white/60 hover:text-white transition mb-8"
          >
            Close
          </button>
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={handleNavItemClick}
                  className="block text-4xl font-bold text-white uppercase tracking-tight hover:text-white/60 transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
