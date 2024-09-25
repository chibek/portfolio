// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      ENVIRONMENT: envField.enum({
        values: ["dev", "prod"],
        context: "client",
        access: "public",
        default: "dev"
      })
    }
  },
  integrations: [tailwind()]
});
