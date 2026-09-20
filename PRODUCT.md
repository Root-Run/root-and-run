# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Fijado por el brief (`docs/brief-sitio-root-and-run.md` §2), no sujeto a propuesta:

- Next.js, App Router (no Pages Router)
- TypeScript en modo estricto
- Tailwind CSS
- `next/font` con fuentes autoalojadas; sin llamadas a Google Fonts en runtime
- `output: 'standalone'` en `next.config`
- pnpm como gestor de paquetes
- Sin dependencias adicionales sin justificación previa: ninguna librería de componentes, de animación ni de estado

**Portabilidad como requisito.** Despliegue hoy en Vercel (alojamiento temporal); destino Docker sobre VPS propio con EasyPanel. El proyecto se construye desde el inicio como si ya corriera en Docker. Prohibido: paquetes `@vercel/*` (incluidos Analytics y Speed Insights), Vercel KV/Blob/Postgres/Edge Config/Cron, runtime `edge`, ISR o revalidación dependiente de la plataforma, y `vercel.json`. Toda configuración va en `next.config`, que viaja con el proyecto. El `Dockerfile` se escribe y se prueba en la misma entrega aunque hoy no se use.

El DNS debe administrarse en un proveedor independiente del alojamiento; si vive en la plataforma, migrar deja de ser un cambio de registro.

## Users

**Usuario primario:** dueños y responsables de negocios locales en Veracruz / Boca del Río, México, contactados en frío por Root & Run.

**Situación:** acaban de recibir un mensaje de prospección de una agencia que no conocen. Antes de responder, buscan el nombre en internet para decidir si la agencia es real.

**Trabajo que están haciendo:** verificar legitimidad. No están comprando, no están comparando proveedores y no llegan con intención. Llegan con sospecha.

Esto fija el criterio de éxito de la portada: resolver la verificación en menos de diez segundos. Un visitante que se queda leyendo no es una señal mejor que uno que se va convencido.

## Product Purpose

Root & Run es un estudio de desarrollo en Veracruz / Boca del Río, México. Cuatro servicios: desarrollo web, agentes de IA, automatizaciones con IA y desarrollo de software.

El sitio tiene dos funciones, ambas concretas:

1. Servir de presencia pública verificable durante la prospección en frío.
2. Hospedar el aviso de privacidad, que es una obligación legal derivada del tratamiento de datos de prospectos.

**Lo que el sitio no es:** no es una landing de ventas, no lleva formulario de contacto, no lleva CMS y no lleva base de datos. El flujo de captura de leads todavía no existe; un formulario que no responde es peor que ninguno.

## Positioning

Estudio local con domicilio, nombre y responsable identificables. En un contexto donde la prospección en frío se confunde con fraude, la verificabilidad es la posición: el sitio existe para demostrar que hay alguien real detrás del mensaje, no para persuadir.

## Operating Context

La ruta de entrada dominante no es la búsqueda orgánica: es un enlace compartido por WhatsApp o un nombre tecleado en un buscador justo después de recibir un mensaje. Esto tiene una consecuencia de diseño que no es opcional — **la tarjeta de vista previa de Open Graph es lo primero que ve el prospecto**, antes que la página. Una imagen faltante se lee como enlace sospechoso.

El sitio se consulta en móvil con alta probabilidad, en unos segundos, y con el mensaje de prospección todavía abierto en otra pestaña.

## Capabilities and Constraints

**Alcance:** dos páginas.

- `/` — Inicio. Una sola pantalla, sin scroll en escritorio si se puede. Nombre y logo, una línea descriptiva (no promocional), los cuatro servicios en texto plano, ubicación, contacto (correo y enlaces de WhatsApp), nota breve de sitio en desarrollo en el pie, enlace a `/privacidad`. Indexable. El brief §3 preveía **un** enlace de WhatsApp; el usuario aportó **dos** números, así que el bloque de contacto los acomoda ambos.
- `/privacidad` — Aviso de privacidad. Documento legal de lectura larga. Prioridad absoluta: legibilidad. Medida de 60–75 caracteres por línea, jerarquía de encabezados con numeración visible, fecha de última actualización arriba, enlace de regreso. `robots: noindex` es aceptable.

**Accesibilidad y responsive:** HTML semántico con un solo `<h1>` por página y jerarquía sin saltos; contraste mínimo AA; navegable por teclado con foco visible; `lang="es-MX"`. Móvil primero, se revisa a 375 px antes que en escritorio, sin desbordamiento horizontal en ningún ancho.

**Prohibido por coherencia legal:** Google Analytics, Meta Pixel, Hotjar o cualquier script de terceros; cookies que no sean estrictamente necesarias. El aviso de privacidad declara que solo se usan cookies necesarias. Agregar analítica pone al sitio en contradicción con su propio aviso desde el primer día. Si después se quiere analítica, primero se actualiza el aviso.

**Decisiones abiertas — no inventar:**

- **Identidad visual definitiva.** Un estudio creativo externo la está desarrollando; entrega estimada aproximadamente a finales de octubre de 2026. Todo lo visual que se construya hoy es provisional por definición. Ver `## Brand Commitments`.
- ~~**Imagen de Open Graph.**~~ Resuelta el 20 de septiembre de 2026: `public/og.png`, generada desde `design/og/og.template.html`. Se rehace cuando llegue la identidad definitiva.
- **Nombre del socio**, necesario solo si los dos WhatsApp se etiquetan con nombre en la portada.

## Brand Commitments

**Nombre:** Root & Run.

**Logotipo — provisional.** Hasta nuevo aviso, la marca se representa con el monograma tipográfico **`R&R`**. No es una decisión de identidad: es un marcador de posición mientras un estudio creativo externo desarrolla la identidad visual definitiva, con entrega estimada aproximadamente a finales de octubre de 2026.

Consecuencia vinculante para el diseño: **la identidad visual definitiva llegará de fuera y no se puede anticipar.** El sitio se construye para que el logotipo, la paleta y la tipografía sean sustituibles sin rehacer la maqueta. En la práctica eso significa tokens de color y tipografía en un solo lugar, el logotipo como un componente aislado y ninguna decisión de composición que dependa de la forma concreta del monograma actual. Un diseño que solo funciona con `R&R` es trabajo que habrá que tirar en un mes.

**Tono de voz:** confiado y sobrio. Comunica confiabilidad, no urgencia.

**Postura ante el cliente — aliado, no proveedor.** Root & Run quiere que el negocio lo lea como alguien que se pone de su lado, no como una agencia que le presenta un catálogo. Tres rasgos, en este orden:

1. **Aliado.** El encuadre es "qué problema tuyo resolvemos", no "qué sabemos hacer".
2. **Soluciones, no capacidades.** Los cuatro servicios se nombran por el trabajo que hacen para el negocio, no por la tecnología que emplean. Un dueño de restaurante no compra "agentes de IA"; compra dejar de perder pedidos por WhatsApp a las tres de la tarde.
3. **Humildad.** Estudio pequeño, dos socios, sin cartera que enseñar todavía. Eso se asume, no se disimula. La humildad aquí es literal: no hay clientes que presumir, así que no se presumen.

**Cómo convive esto con la prohibición de lenguaje de vendedor.** No es una contradicción, es una restricción de forma: se nombra el problema que se resuelve, en términos llanos y comprobables, y ahí termina. Lo que sigue prohibido es la promesa sin sustento ("transformamos tu negocio"), el superlativo y la urgencia. Decir qué resuelves es descripción; decir en qué te convertirás es venta.

La confiabilidad se gana por la vía material de esta superficie —domicilio, nombre del responsable, contacto directo, aviso de privacidad real—, no por adjetivos.

**Prohibido en el lenguaje:** frases de vendedor tipo "transformamos tu negocio", "lleva tu empresa al siguiente nivel", "soluciones innovadoras". Sin emojis en la interfaz.

**Línea descriptiva — confirmada por el usuario el 20 de septiembre de 2026:**

> Software que hace el trabajo que hoy haces a mano.

Es la línea de la portada y de la tarjeta de Open Graph. Sustituye a la enumeración de categoría ("desarrollo web, software a la medida y automatización con IA"), que el usuario descartó por intercambiable con la de cualquier otro estudio.

Por qué esta y no otra: nombra el problema del lector en vez de la capacidad del estudio, que es la aplicación directa del principio de aliado. Cubre los cuatro servicios sin enumerar ninguno. No contiene término técnico que traducir.

**Registro:** la portada tutea. El aviso de privacidad habla de usted, por convención del documento legal. No es incoherencia; es registro por superficie. Futuras superficies comerciales tutean.

El trabajo explicativo —qué hace cada servicio— no lo carga esta línea, lo carga el índice de los cuatro servicios inmediatamente debajo.

**Restricciones visuales vinculantes** (fijadas por el usuario en el brief §5, se registran sin expandirlas): referencias Mercury, Ramp, Linear. Fuera: degradados saturados, glassmorphism, sombras pronunciadas, animaciones de entrada, parallax, contadores, imágenes de archivo genéricas.

**Dirección visual fijada por el usuario — identidad temporal.** El 20 de septiembre de 2026 el usuario descartó la dirección alternativa que se le había presentado y fijó explícitamente una identidad **monocromática oscura, con Linear y Resend como referencias**. Esta decisión es vinculante y sustituye cualquier dirección previa; vence a cualquier proceso de selección de concepto mientras siga en pie.

Consecuencia declarada: la vara de calidad deja de ser la distinción y pasa a ser **el nivel de acabado de Linear y Resend**. Se ejecuta el estándar de la categoría a plena fidelidad, sin ironía y sin introducir excentricidades para compensar la familiaridad.

Reglas de la identidad temporal:

- **Sin color de acento.** Toda la jerarquía se resuelve por valor de gris, peso tipográfico y espacio.
- **Fondo oscuro**, casi negro, nunca negro puro.
- **Filetes y marcos** como blanco a muy baja opacidad, no como líneas grises sólidas.
- **Rellenos planos.** Se mantienen los vetos del brief: sin degradados, sin glassmorphism, sin sombras pronunciadas.
- **Una sola familia tipográfica** en toda la superficie.

Escala de valor ya comprometida, tomada del artefacto de referencia (`public/og.png`, fuente en `design/og/og.template.html`):

| Rol | Valor |
| :--- | :--- |
| Fondo | `#08090A` |
| Texto primario | `#F7F8F8` |
| Gris de lectura | `#8A8F98` |
| Gris de etiqueta | `#767C85` (4.74:1 sobre el fondo, cumple AA) |
| Filete / marco | `#F7F8F8` al 7–10% de opacidad |

**Tipografía:** Archivo (grotesco de la familia Franklin), autoalojada en `design/og/Archivo.ttf`, eje variable de peso y ancho. Es la fuente que debe usar `next/font`.

Todo lo anterior es **provisional** y cae cuando llegue la identidad definitiva del estudio externo. Por eso estos valores viven como tokens en un solo lugar y el logotipo como componente aislado.

**Dominio:** `rootandrun.com`.

**Correos:**

- Público / comercial: `root.and.run.automations@gmail.com` — es el que va en la portada.
- Privacidad y derechos ARCO: `carlossmg13@gmail.com` — es el que va en el aviso.

**Sustitución de marcadores en el aviso de privacidad (confirmada el 20 de septiembre de 2026):**

| Marcador | Sección | Valor |
| :--- | :--- | :--- |
| `[correo]` | 4 — negativa de finalidades secundarias | `carlossmg13@gmail.com` |
| `[correo]` | 7 — derechos ARCO | `carlossmg13@gmail.com` |
| `[dominio]` | 11 — cambios al aviso | `rootandrun.com` |
| `[proveedor de correo]` | 6 — encargados y terceros | Google LLC |

**Esto es deliberado, no un descuido:** el visitante ve `root.and.run.automations@gmail.com` en la portada y `carlossmg13@gmail.com` en el aviso. Son dos canales distintos — contacto comercial y ejercicio de derechos ante el responsable. No unificar.

Ambos son cuentas de Gmail. No hay correo institucional de dominio propio todavía; es un estado temporal declarado por el usuario, no una decisión de marca.

**WhatsApp — provisional.** Dos líneas personales, las de los dos socios, mientras no exista una línea de la empresa:

- `229 525 1975` — Carlos Morales García
- `229 481 0718` — el socio (atribución confirmada por el usuario el 20 de septiembre de 2026)

Formato para los enlaces: `https://wa.me/522295251975` y `https://wa.me/522294810718` (código de país 52 + los diez dígitos, sin el `1` intermedio). **Ambos enlaces se abren y se comprueban antes de publicar**, no se asumen: el formato de WhatsApp para México ha cambiado históricamente y un enlace roto en la única vía de contacto anula el propósito del sitio.

Queda abierto únicamente el **nombre del socio**, que solo hace falta si los enlaces se etiquetan con nombre en la interfaz. Sin él, ambos se presentan como WhatsApp sin atribución nominal.

**Responsable legal:** Carlos Morales García, con domicilio en Veracruz, Veracruz, México (domicilio completo en el aviso de privacidad, §1).

**Encargado declarado:** Google (Gmail / Workspace) como proveedor de correo, sección 6 del aviso.

## Evidence on Hand

- `docs/brief-sitio-root-and-run.md` — brief de implementación completo, con stack, páginas, dirección visual, requisitos técnicos y criterios de aceptación.
- `privacidad/aviso-de-privacidad-r&r.md` — aviso de privacidad revisado, 12 secciones, fechado el 21 de septiembre de 2026.

**Regla crítica sobre el texto legal.** El contenido de `/privacidad` se copia **literalmente**. No se reescribe, no se resume, no se "mejora", no se cambian plazos, no se cambia el nombre de la autoridad, no se reordenan secciones, no se corrige lo que parezca redundante. Es un documento legal revisado: cualquier cambio de redacción es un cambio de obligación. Lo único permitido es convertir el Markdown a estructura de página y aplicar estilos. Un error de dedo o una inconsistencia real **se reporta, no se corrige**. Los marcadores entre corchetes se sustituyen solo con valores proporcionados.

**Lo que no existe y no debe fabricarse:** testimonios, clientes, casos de éxito, métricas, número de proyectos, años de experiencia, tamaño del equipo, precios, certificaciones y logos de clientes. No hay ninguno. El sitio se construye sin prueba social porque no la hay.

## Product Principles

1. **La verificación es el trabajo.** Cada elemento de la portada se justifica por si ayuda a un desconocido a confirmar que Root & Run es real. Lo que no sirve a eso, sobra.
2. **Sobriedad sobre persuasión.** El visitante llega con sospecha, no con interés. La urgencia y el lenguaje de venta confirman la sospecha en lugar de disolverla.
3. **Nada que no se pueda sostener.** Sin prueba social inventada, sin capacidades no confirmadas, sin formularios que nadie atiende.
4. **El aviso de privacidad manda sobre la técnica.** Ninguna decisión de implementación puede contradecir lo que el documento legal declara.
5. **Portable por construcción.** Nada que ate el proyecto a un proveedor de alojamiento, hoy o después.

## Accessibility & Inclusion

Contraste mínimo AA, navegación completa por teclado con foco visible, HTML semántico con jerarquía de encabezados sin saltos, `lang="es-MX"`. Sin requisito de estándar formal más allá de esto.

La página `/privacidad` tiene una exigencia de legibilidad superior por ser lectura larga de contenido legal: medida de 60–75 caracteres, numeración visible y jerarquía clara.
