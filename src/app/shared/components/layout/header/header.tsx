"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage, useTheme } from "@/app/core/providers";
import type { Locale } from "@/i18n";
import LogoIcon from "@/assets/icons/logo.svg";
import ChevronDownIcon from "@/assets/icons/chevron-down.svg";
import SunIcon from "@/assets/icons/sun.svg";
import MoonIcon from "@/assets/icons/moon.svg";
import "./header.scss";

const languages: { code: Locale; label: string }[] = [
  { code: "uk", label: "UK" },
  { code: "en", label: "EN" },
];

export default function Header() {
  const { locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="header">
      <div className="header__inner">
        <Link href="/" className="header__logo">
          <LogoIcon className="header__logo-icon" />
          <div className="header__logo-text">
            <span className="header__logo-name">HLADKYKH IVAN</span>
            <span className="header__logo-sub">CONVERSION LAB</span>
          </div>
        </Link>

        <div className="header__actions">
          <div className="header__lang" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="header__toggle"
              aria-label="Switch language"
            >
              {locale.toUpperCase()}
              <ChevronDownIcon />
            </button>

            {langOpen && (
              <div className="header__lang-dropdown">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    className={`header__lang-option ${locale === lang.code ? "header__lang-option--active" : ""}`}
                    onClick={() => {
                      setLocale(lang.code);
                      setLangOpen(false);
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div
            className="header__theme-switch"
            onClick={toggleTheme}
            role="button"
            aria-label="Toggle theme"
          >
            <div className={`header__theme-thumb ${theme === "dark" ? "header__theme-thumb--dark" : ""}`} />
            <SunIcon className={`header__theme-icon ${theme === "light" ? "header__theme-icon--active" : ""}`} />
            <MoonIcon className={`header__theme-icon ${theme === "dark" ? "header__theme-icon--active" : ""}`} />
          </div>
        </div>
      </div>
    </header>
  );
}
