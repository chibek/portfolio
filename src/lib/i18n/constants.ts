import { english } from "./locale/english";
import { spanish } from "./locale/spanish";
import type { Locale, Timezone } from "./types";

export const DEFAULT_LOCALE = "en" as const satisfies Locale;
export const SUPPORTED_LOCALES = ["en", "es"] as const;
export const MY_TIMEZONE = "Europe/Madrid" satisfies Timezone;

export const DEFAULT_TRANSLATION = english satisfies {
  meta: { locale: typeof DEFAULT_LOCALE };
};
/** The map with all our translated strings. */
export const TRANSLATIONS = {
  en: english,
  es: spanish,
} as const;
