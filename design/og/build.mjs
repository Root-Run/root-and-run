/**
 * Genera el HTML intermedio de la tarjeta de Open Graph, con la fuente
 * incrustada en base64 para que el render no dependa de rutas externas.
 *
 *   node design/og/build.mjs
 *
 * Después, para rasterizar a public/og.png (1200x630):
 *
 *   npx --yes http-server design/og -p 8731   # o: python -m http.server 8731
 *   playwright-cli open --browser firefox
 *   playwright-cli resize 1200 630
 *   playwright-cli goto http://127.0.0.1:8731/og.build.html
 *   playwright-cli screenshot --filename public/og.png
 *
 * Playwright bloquea el protocolo file:, por eso hace falta servirlo.
 * og.build.html es un artefacto: esta en .gitignore y se regenera.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const aqui = dirname(fileURLToPath(import.meta.url));
const raiz = join(aqui, "..", "..");

// Una sola copia de la fuente, compartida con next/font.
const fuente = readFileSync(join(raiz, "app", "fonts", "Archivo.ttf"));
const plantilla = readFileSync(join(aqui, "og.template.html"), "utf8");

const salida = join(aqui, "og.build.html");
writeFileSync(salida, plantilla.replace("__FONT_B64__", fuente.toString("base64")));

console.log(`og.build.html generado (${(fuente.length / 1024).toFixed(0)} KB de fuente incrustada)`);
