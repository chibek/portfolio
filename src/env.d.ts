/// <reference path="../.astro/types.d.ts" />
/// <reference path="../.astro/icon.d.ts" />
/// <reference types="astro/client" />

import type { Locale, TRANSLATIONS } from "@lib/i18n";
import "astro";
declare global {
  namespace App {
    // The locals attached during middleware.
    interface Locals {
      locale: Locale;
      translations: (typeof TRANSLATIONS)[Locale];
    }
  }
}