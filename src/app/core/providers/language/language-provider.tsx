"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, type Locale, type Translations } from "@/i18n";
import { storage } from "@/app/core/services/storage";

type LanguageCtx = {
  locale: Locale;
  t: Translations;
  setLocale: (l: Locale) => void;
};

const Ctx = createContext<LanguageCtx>(null!);

export const useLanguage = () => useContext(Ctx);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("uk");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = storage.get("locale");
    if (saved === "en") setLocaleState("en");
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("lang", locale);
    storage.set("locale", locale);
  }, [locale, mounted]);

  const setLocale = (l: Locale) => setLocaleState(l);

  if (!mounted) return null;

  return (
    <Ctx.Provider value={{ locale, t: translations[locale], setLocale }}>
      {children}
    </Ctx.Provider>
  );
}
