import type { Locale } from "./index";

export const LOCALE_COOKIE = "locale";
export const DEFAULT_LOCALE: Locale = "en";
const LOCALE_COOKIE_RE = new RegExp(`(?:^|; )${LOCALE_COOKIE}=([^;]*)`);

export function parseLocale(value: string | undefined): Locale {
  return value === "uk" ? "uk" : DEFAULT_LOCALE;
}

/** Client: read the locale cookie from `document.cookie`. */
export function readClientLocale(): Locale | undefined {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(LOCALE_COOKIE_RE);
  return match ? parseLocale(decodeURIComponent(match[1])) : undefined;
}

/** Client: persist the locale to a cookie (1 year). */
export function writeClientLocale(locale: Locale): void {
  if (typeof document === "undefined") return;
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}
