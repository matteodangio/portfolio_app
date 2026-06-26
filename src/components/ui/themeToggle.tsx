"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  function toggleTheme() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      className="theme-toggle inline-flex h-9 w-9 items-center justify-center rounded-full transition-opacity duration-200 hover:opacity-60"
    >
      <Sun className="theme-toggle__sun h-[18px] w-[18px]" />
      <Moon className="theme-toggle__moon h-[18px] w-[18px]" />
    </button>
  );
}
