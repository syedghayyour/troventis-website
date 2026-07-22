"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

type Props = { labelLight: string; labelDark: string };

export function ThemeToggle({ labelLight, labelDark }: Props) {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      /* private mode: preference simply not persisted */
    }
    setDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? labelLight : labelDark}
      className="inline-flex size-11 items-center justify-center rounded-md text-ink-muted transition-colors duration-(--motion-fast) hover:text-ink"
    >
      {/* Render both, CSS decides: avoids hydration flicker. */}
      <Sun
        size={20}
        strokeWidth={1.75}
        className="hidden dark:block"
        aria-hidden="true"
      />
      <Moon size={20} strokeWidth={1.75} className="dark:hidden" aria-hidden="true" />
    </button>
  );
}
