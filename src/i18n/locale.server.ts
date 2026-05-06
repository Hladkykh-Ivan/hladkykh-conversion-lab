import { cache } from "react";
import { cookies } from "next/headers";
import { translations, type Locale, type Translations } from "./index";
import { LOCALE_COOKIE, parseLocale } from "./locale";

/** Server: read locale from request cookies. Memoized per request. */
export const getServerLocale = cache(async (): Promise<Locale> => {
  const cookieStore = await cookies();
  return parseLocale(cookieStore.get(LOCALE_COOKIE)?.value);
});

/** Server: get translations for the current request's locale. */
export const getServerTranslations = cache(async (): Promise<Translations> => {
  return translations[await getServerLocale()];
});
