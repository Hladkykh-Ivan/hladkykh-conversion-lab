"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, type Locale, type Translations } from "@/i18n";
import { readClientLocale, writeClientLocale } from "@/i18n/locale";

type LanguageCtx = {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
};

const Ctx = createContext<LanguageCtx | null>(null);

export const useLanguage = (): LanguageCtx => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = readClientLocale();
    if (saved) setLocale(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("lang", locale);
    writeClientLocale(locale);
  }, [locale, mounted]);

  if (!mounted) return null;

  return (
    <Ctx.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </Ctx.Provider>
  );
}
