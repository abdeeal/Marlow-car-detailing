import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
export default defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    ".next/**",
    "next-env.d.ts",
    "test-results/**",
    "playwright-report/**",
  ]),
  {
    rules: {
      // The project serves pre-compressed responsive images, without an image API.
      "@next/next/no-img-element": "off",
      // Full document navigation deliberately disposes of in-memory demo entries.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]);
