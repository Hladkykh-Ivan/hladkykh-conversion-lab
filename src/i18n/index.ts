import uk from "./locales/uk.json";
import en from "./locales/en.json";

export const translations = { uk, en };
export type Locale = keyof typeof translations;
export type Translations = typeof uk;
