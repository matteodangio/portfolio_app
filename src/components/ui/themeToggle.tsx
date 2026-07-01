"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  return (
    <button
      type="button"
      suppressHydrationWarning
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className="cursor-pointer theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-60"
    >
      <Sun className="theme-toggle__sun h-4.5 w-4.5" />
      <Moon className="theme-toggle__moon h-4.5 w-4.5" />
    </button>
  );
}