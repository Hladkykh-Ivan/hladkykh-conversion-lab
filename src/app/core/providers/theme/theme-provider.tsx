"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { storage } from "@/app/core/services/storage";

type Theme = "dark" | "light";

type ThemeCtx = {
  theme: Theme;
  toggleTheme: () => void;
};

const Ctx = createContext<ThemeCtx>(null!);

export const useTheme = () => useContext(Ctx);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (storage.get("theme") === "light") setTheme("light");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    storage.set("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  if (!mounted) return null;

  return (
    <Ctx.Provider value={{ theme, toggleTheme }}>
      {children}
    </Ctx.Provider>
  );
}
