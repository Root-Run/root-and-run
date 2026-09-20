import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // Herramienta del entorno, no código del sitio: scripts vendorizados
    // por las skills instaladas con npx. No los mantenemos nosotros.
    ".claude/**",
    ".impeccable/**",
  ]),
]);

export default eslintConfig;
