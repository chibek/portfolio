import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  ...eslintPluginAstro.configs.recommended,
  jsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
  {
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
          extraFileExtensions: [".astro"],
        },
        rules: {
          "@stylistic/jsx/jsx-self-closing-comp": [
            "error",
            {
              component: true,
              html: true,
            },
          ],
        },
      },
    ],
    rules: {
      "@stylistic/jsx/jsx-self-closing-comp": [
        "error",
        {
          component: true,
          html: true,
        },
      ],
    },
    plugins: {
      "@stylistic/ts": stylisticTs,
      "@stylistic/jsx": stylisticJsx,
    },
    ignores: ["dist/", "**/*.d.ts"],
  },
];
