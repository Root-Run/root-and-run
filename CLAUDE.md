@AGENTS.md

# Root & Run — contexto del proyecto

Lee esto completo antes de escribir código. El contexto largo de producto
vive en `PRODUCT.md`; el contrato de dirección de las superficies, en
`.impeccable/surfaces/`.

## Qué es esto

Sitio de **dos páginas** que sirve como presencia pública verificable de
Root & Run, estudio de desarrollo en Veracruz / Boca del Río, México.

Existe por una razón concreta: se hace prospección en frío, y quien recibe
un mensaje busca el nombre de la agencia antes de responder. El sitio
resuelve esa verificación en menos de diez segundos y hospeda el aviso de
privacidad.

**No es** una landing de ventas. No lleva formulario, ni CMS, ni base de
datos. El flujo de captura de leads no existe todavía; un formulario que no
responde es peor que ninguno.

## Regla crítica: el texto legal

El contenido de `/privacidad` es una transcripción **literal** de
`privacidad/aviso-de-privacidad-r&r.md`.

**No lo reescribas, no lo resumas, no lo "mejores", no cambies plazos, no
cambies el nombre de la autoridad, no reordenes secciones, no corrijas lo
que te parezca redundante.** Es un documento legal revisado: cualquier
cambio de redacción es un cambio de obligación.

Lo único permitido es convertir el Markdown a estructura de página y
aplicar estilos. Si detectas un error de dedo o una inconsistencia real,
**repórtalo, no lo corrijas.**

Marcadores ya sustituidos, con valores confirmados por el responsable:

| Marcador | Sección | Valor |
| :--- | :--- | :--- |
| `[correo]` | 4 y 7 | `root.and.run.automations@gmail.com` |
| `[proveedor de correo]` | 6 | Google LLC |
| `[dominio]` | 11 | `rootandrun.com` |

La portada y el aviso usan el **mismo correo**,
`root.and.run.automations@gmail.com`, para contacto comercial y para el
ejercicio de derechos ARCO. Se unificó por decisión del responsable el 21 de
septiembre de 2026. No volver a separarlos sin que el responsable lo pida.

## Stack fijo — no sujeto a propuesta

| Elemento | Decisión |
| :--- | :--- |
| Framework | Next.js, App Router |
| Lenguaje | TypeScript, modo estricto |
| Estilos | Tailwind CSS v4 |
| Tipografía | `next/font/local` con Archivo en `app/fonts/` |
| Salida | `output: 'standalone'` |
| Gestor | pnpm |
| Dependencias extra | Ninguna sin justificarla antes |

Sin librería de componentes, sin librería de animación, sin gestor de
estado. Si crees que alguna decisión es incorrecta, **dilo antes de
implementar; no la cambies por tu cuenta.**

## Portabilidad — requisito, no sugerencia

Hoy en Vercel como alojamiento temporal; destino Docker sobre VPS propio
con EasyPanel. El proyecto se construye como si ya corriera en Docker.

**Prohibido:** paquetes `@vercel/*` de cualquier tipo, incluidos Analytics
y Speed Insights · Vercel KV, Blob, Postgres, Edge Config, Cron Jobs ·
runtime `edge` en rutas o middleware · ISR, revalidación por etiquetas o
`revalidatePath` dependiente de la plataforma · `vercel.json`.

Toda configuración va en `next.config.ts`, que viaja con el proyecto.

## Prohibido por coherencia legal

Google Analytics, Meta Pixel, Hotjar o cualquier script de terceros.
Cookies que no sean estrictamente necesarias.

El aviso declara que solo se usan cookies necesarias. Agregar analítica
pone al sitio en contradicción con su propio aviso. Si después se quiere
analítica, **primero se actualiza el aviso.**

## Marca y lenguaje

Tono **confiado y sobrio**. Comunica confiabilidad, no urgencia.

Postura: **aliado, no proveedor.** El encuadre es "qué problema tuyo
resolvemos", no "qué sabemos hacer". Los servicios se nombran por el
trabajo que hacen para el negocio, no por la tecnología que emplean.

**Fuera:** lenguaje de vendedor ("transformamos tu negocio", "lleva tu
empresa al siguiente nivel", "soluciones innovadoras"), superlativos,
urgencia, emojis en la interfaz.

**No inventar jamás:** testimonios, clientes, casos de éxito, métricas,
años de experiencia, tamaño de equipo, precios, certificaciones. No hay
ninguno, y el sitio se construye sin prueba social porque no la hay.

## Identidad visual — provisional

Monocromática oscura. Referencias fijadas por el cliente: Linear, Resend.
**Sin color de acento:** la jerarquía se resuelve por valor de gris, peso y
espacio. Rellenos planos: sin degradados, sin glassmorphism, sin sombras,
sin animaciones de entrada, sin parallax, sin contadores.

Los tokens viven en `app/globals.css` y **solo ahí**. El logotipo `R&R` es
un marcador de posición: un estudio externo entrega la identidad definitiva
a finales de octubre de 2026. Todo debe ser sustituible sin rehacer la
maqueta.

## Accesibilidad

`lang="es-MX"` · un solo `<h1>` por página · jerarquía sin saltos ·
contraste mínimo AA · navegable por teclado con foco visible · móvil
primero, se revisa a 375 px antes que en escritorio · sin desbordamiento
horizontal en ningún ancho.

## Assets generados

`public/og.png` y `app/icon.png` se generan desde plantillas HTML
rasterizadas con Playwright. Ver `design/og/build.mjs` para el
procedimiento. No los edites a mano: regenéralos.

## Cómo trabajar

- Antes de implementar, presenta un plan corto y espera confirmación.
- Un cambio significativo, un commit, con mensaje descriptivo.
- Si algo es ambiguo o contradictorio, **pregunta antes de decidir.**
- No agregues páginas, secciones ni funcionalidad fuera de alcance. Si se
  te ocurre algo útil, propónlo; no lo implementes.
