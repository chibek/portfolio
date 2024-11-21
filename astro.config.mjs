// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

import icon from "astro-icon";

import preact from "@astrojs/preact";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sergio-belena.pages.dev",
  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
  },

  env: {
    schema: {
      ENVIRONMENT: envField.enum({
        values: ["dev", "prod"],
        context: "client",
        access: "public",
        default: "dev",
      }),
    },
  },

  integrations: [
    tailwind(),
    icon({
      iconDir: "src/assets/icons",
      svgoOptions: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                // customize default plugin options
                inlineStyles: {
                  onlyMatchedOnce: false,
                },
                // or disable plugins
                removeDoctype: false,
              },
            },
          },
        ],
      },
    }),
    preact(),
    sitemap(),
  ],
});
