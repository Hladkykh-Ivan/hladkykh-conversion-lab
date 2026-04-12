"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useLanguage, useTheme } from "@/app/core/providers";
import type { Locale } from "@/i18n";
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
          <svg
            className="header__logo-icon"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <path
              d="M9 8v16h3v-6.5h8V24h3V8h-3v6.5h-8V8z"
              fill="#fff"
            />
          </svg>
          <span className="header__logo-text">
            Conversion<span className="header__logo-accent">Lab</span>
          </span>
        </Link>

        <div className="header__actions">
          <div className="header__lang" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="header__toggle"
              aria-label="Switch language"
            >
              {locale.toUpperCase()}
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M3 4.5l3 3 3-3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
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
            <svg className={`header__theme-icon ${theme === "light" ? "header__theme-icon--active" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
            <svg className={`header__theme-icon ${theme === "dark" ? "header__theme-icon--active" : ""}`} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
