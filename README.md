# root-and-run

Sitio público de **Root & Run**, estudio de desarrollo en Veracruz / Boca
del Río, México. Dos páginas: la portada y el aviso de privacidad.

Su trabajo es que alguien contactado en frío pueda verificar en segundos
que el estudio existe. No es una landing de ventas: no hay formulario, ni
CMS, ni base de datos.

## Requisitos

- Node.js 24 o superior
- pnpm 11 (`corepack enable` lo activa desde Node)

## Correrlo en local

```bash
pnpm install
pnpm dev
```

Queda en <http://localhost:3000>.

Otros comandos:

```bash
pnpm build   # build de producción
pnpm start   # sirve el build
pnpm lint
```

## Variables de entorno

**Ninguna.** El sitio es estático y no consume servicios externos. Si algún
día hace falta una, documentarla aquí antes de introducirla.

## Puerto

**3000**, tanto en desarrollo como en la imagen de Docker. En el contenedor
se puede cambiar con `PORT`.

## Docker

La imagen es multietapa y aprovecha `output: 'standalone'`, así que el
runtime lleva solo las dependencias que el servidor realmente usa. Corre
como usuario sin privilegios (`nextjs`, uid 1001).

```bash
docker build -t root-and-run .
docker run --rm -p 3000:3000 root-and-run
```

Incluye `HEALTHCHECK`, que EasyPanel y la mayoría de orquestadores leen
directamente.

## Despliegue

Hoy en **Vercel**, como alojamiento temporal. El destino es **Docker sobre
VPS propio con EasyPanel**.

Por eso el proyecto no usa nada atado a una plataforma: sin paquetes
`@vercel/*`, sin runtime `edge`, sin ISR dependiente de infraestructura y
sin `vercel.json`. Toda la configuración vive en `next.config.ts`, que
viaja con el repositorio.

> El dominio debe administrarse en un proveedor de DNS independiente del
> alojamiento. Si el DNS vive en la plataforma, migrar deja de ser un
> cambio de registro.

## Estructura

```
app/
  layout.tsx          metadata, Open Graph, fuente autoalojada
  page.tsx            portada
  privacidad/         aviso de privacidad
  fonts/Archivo.ttf   única copia de la tipografía
  globals.css         tokens de diseño — el único lugar donde viven
  icon.png            favicon (generado)
public/og.png         tarjeta de Open Graph (generada)
design/               plantillas de los assets generados
privacidad/           Markdown fuente del aviso legal
docs/                 brief de implementación
PRODUCT.md            contexto de producto, marca y decisiones abiertas
CLAUDE.md             reglas para agentes que trabajen en el repo
```

## Assets generados

`public/og.png` y `app/icon.png` se rasterizan desde plantillas HTML con
Playwright, para que usen la tipografía real del sitio. **No se editan a
mano.** El procedimiento está documentado en `design/og/build.mjs`.

## Antes de tocar `/privacidad`

Su texto es una transcripción **literal** de un documento legal revisado.
No se reescribe ni se corrige: los errores se reportan. Ver `CLAUDE.md`.
