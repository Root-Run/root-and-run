---
name: Root & Run
description: Identidad provisional monocromática oscura para un sitio de dos páginas cuyo trabajo es la verificación, no la venta.
colors:
  fondo: "#08090a"
  primero: "#f7f8f8"
  segundo: "#8a8f98"
  tercero: "#767c85"
  filete: "rgb(247 248 248 / 0.1)"
  marco: "rgb(247 248 248 / 0.07)"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 10vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 7vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.032em"
  lead:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 4.4vw, 1.5rem)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "-0.012em"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-compact:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "normal"
  small:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.12em"
rounded:
  foco: "2px"
  marca: "9px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.75rem"
  xl: "2.25rem"
  2xl: "2.75rem"
  3xl: "3rem"
  4xl: "3.5rem"
components:
  monograma:
    textColor: "{colors.primero}"
    typography: "{typography.label}"
    rounded: "{rounded.marca}"
    height: "3rem"
    width: "3rem"
  enlace-accionable:
    textColor: "{colors.primero}"
    typography: "{typography.body-compact}"
  enlace-accionable-hover:
    textColor: "{colors.primero}"
    typography: "{typography.body-compact}"
  enlace-tenue:
    textColor: "{colors.tercero}"
    typography: "{typography.small}"
  enlace-tenue-hover:
    textColor: "{colors.primero}"
    typography: "{typography.small}"
  etiqueta-columna:
    textColor: "{colors.tercero}"
    typography: "{typography.label}"
    width: "11.5rem"
  fila-servicio:
    textColor: "{colors.primero}"
    typography: "{typography.body-compact}"
    padding: "0.8125rem 0"
---

# Design System: Root & Run

> **Estado: PROVISIONAL.** Un estudio creativo externo entrega la identidad
> visual definitiva a finales de octubre de 2026. Todo lo que este documento
> registra —paleta, familia tipográfica, monograma— está construido para ser
> sustituido sin rehacer la maqueta. Lo que se sustituye y dónde vive cada cosa
> está en **Overview > Superficie de reemplazo**. Lo que *no* es provisional son
> las reglas de composición, el sistema de valor por gris y las superficies de
> navegador tematizadas: esas sobreviven al cambio de identidad.

## Overview

**Creative North Star: "El Acta Notarial"**

Este sistema no persuade: hace constar. El visitante llega con sospecha, a los
segundos de recibir un mensaje en frío, y lo que encuentra tiene la temperatura
de un documento sellado: fondo casi negro, una sola familia tipográfica, cero
color de acento y cada dato en su renglón. La jerarquía completa se resuelve con
tres recursos y ninguno más —valor de gris, peso tipográfico y espacio—, de modo
que la página se lee como un registro y no como un catálogo. Las referencias
fijadas por el cliente son Linear y Resend, y la vara es su nivel de acabado
ejecutado a plena fidelidad, sin excentricidades de compensación.

La densidad es baja y deliberada. La portada entra en una sola pantalla a
1280×800 porque el ritmo vertical se aprieta a partir de 640px, no porque el
contenido se recorte. El aviso de privacidad hace lo contrario: se abre a una
medida de lectura estrecha y respira, porque ahí el trabajo es sostener 4 800px
de texto legal sin fatiga. Dos densidades, un solo vocabulario.

La superficie es plana sin excepción. No hay degradados, glassmorphism ni
sombras: la separación se dibuja con filetes de blanco a opacidad muy baja, que
cortan el plano sin construir cajas. La única zona viva es la respuesta al
puntero y al teclado en los enlaces; nada entra, nada se desplaza, nada cuenta.

**Superficie de reemplazo.** Cuando llegue la identidad definitiva, se tocan
exactamente tres lugares: `app/globals.css` (los seis tokens del bloque `@theme`
y `:root`), `app/layout.tsx` (la declaración de `localFont`) y
`app/Monograma.tsx` (el logotipo completo, aislado en su propio archivo). Ningún
valor de marca vive en `app/page.tsx` ni en `app/privacidad/page.tsx`: ambas
páginas consumen los tokens por nombre. Ninguna decisión de composición depende
de la forma concreta de `R&R` —el monograma es un cuadro de 3rem en la esquina
superior izquierda y cualquier marca que quepa ahí funciona.

**Key Characteristics:**

- Monocromático estricto: cuatro valores de gris, sin color de acento en ninguna
  superficie.
- Fondo casi negro (`#08090a`), nunca negro puro.
- Una sola familia tipográfica variable (Archivo) en todo el sitio.
- Filetes y marcos como blanco a 7–10% de opacidad, nunca gris sólido.
- Superficie plana: sin sombras, sin degradados, sin glassmorphism.
- Un solo eje de alineación por página, y una columna de etiqueta fija de
  11.5rem que lo establece.
- Las superficies del navegador (selección, cursor, barra de desplazamiento,
  anillo de foco) están tematizadas, no heredadas.

## Colors

Una escala de valor de cuatro peldaños sobre un fondo casi negro; todo el
significado que en otros sistemas cargaría un acento aquí lo carga la distancia
entre dos grises.

### Primary

- **Blanco de Papel Frío** (`{colors.primero}`): el único valor de énfasis del
  sistema. Titulares, nombres de servicio, texto en negrita dentro del aviso, el
  monograma, el valor de los tres destinos accionables, y el estado de hover y
  foco de todo enlace. Es también el color del anillo de foco, del cursor de
  texto y del fondo de la selección de texto. Su escasez relativa es lo que lo
  hace funcionar como acento sin serlo.

### Neutral

- **Tinta Casi Negra** (`{colors.fondo}`): fondo único de todo el sitio.
  Declarado también como `color-scheme: dark`, de modo que el navegador pinta
  sus propios controles en oscuro. Nunca `#000`.
- **Gris de Lectura** (`{colors.segundo}`): el gris en el que se lee. La línea
  descriptiva de la portada, la descripción de cada servicio y el cuerpo entero
  del aviso de privacidad. Es el valor por defecto de un párrafo largo; el
  blanco se reserva para lo que debe destacar dentro de él.
- **Gris de Etiqueta** (`{colors.tercero}`): el peldaño más bajo (4.74:1 sobre el
  fondo, cumple AA). Etiquetas de la columna de contacto, pie de la portada,
  fecha de actualización, viñetas de lista, la nota legal en cursiva, el enlace
  de regreso y —de forma crítica— el subrayado de todo enlace en reposo.
- **Filete** (`{colors.filete}`): blanco al 10%. Divisiones estructurales: el
  borde superior e inferior de cada fila de servicio, la línea que separa el pie
  de la portada y la regla horizontal que cierra el aviso.
- **Marco** (`{colors.marco}`): blanco al 7%. El peldaño más tenue del sistema,
  reservado al contorno de 1px del monograma.

### Named Rules

**La Regla del Acento Ausente.** No existe color de acento y no se añade uno. Si
algo necesita destacar, sube de valor (gris de lectura → blanco), sube de peso
(400 → 500 → 600) o gana espacio. Prueba de auditoría: si una pantalla nueva
contiene un valor de color que no sea uno de los seis tokens declarados, está
fuera del sistema.

**La Regla del Filete, no la Caja.** La separación se dibuja con una línea de 1px
de blanco translúcido entre 7% y 10%, nunca con un contorno cerrado, un relleno
de superficie ni una sombra. El 10% (`filete`) separa contenido; el 7% (`marco`)
contiene el monograma. Nada del sistema vive fuera de ese rango: un borde al 20%
ya es una caja gris y rompe el plano.

**La Regla del Subrayado Vivo.** Todo enlace se subraya siempre. En reposo el
subrayado es gris de etiqueta; en hover y en foco pasa a blanco. El subrayado
nunca desaparece —la transición ocurre en su valor, no en su presencia—, y la
transición dura 150ms sobre `color` y `text-decoration-color` únicamente.

## Typography

**Display / Body / Label Font:** Archivo (con `ui-sans-serif, system-ui,
sans-serif` de reserva), grotesco de la familia Franklin, autoalojada como
fuente variable con eje de peso `100 900` y eje de ancho `62% 125%`. No hay
segunda familia y no hay familia monoespaciada.

**Character:** Un grotesco americano de caja alta y terminaciones rectas que a
tamaño grande, con tracking cerrado, se comporta como titular de producto, y a
tamaño de lectura desaparece como voz y deja pasar el texto legal. `font-synthesis:
none` está activo: no se falsifican pesos ni cursivas fuera de lo que el archivo
provee.

### Hierarchy

- **Display** (600, `{typography.display.fontSize}`, interlínea 1.02, tracking
  −0.038em): exclusivo del nombre de la marca como `h1` de la portada. El
  tracking más cerrado del sistema.
- **Headline** (600, `{typography.headline.fontSize}`, interlínea 1.1, tracking
  −0.032em): el `h1` del aviso de privacidad. Un peldaño por debajo del display
  en tamaño y en cierre de tracking.
- **Lead** (400, `{typography.lead.fontSize}`, interlínea 1.4, tracking −0.012em,
  gris de lectura): la línea descriptiva bajo el nombre, limitada a 30ch con
  `text-balance` para que rompa en dos renglones parejos.
- **Title** (600, `1.375rem`, interlínea 1.35, tracking −0.015em, blanco): los
  doce `h2` numerados del aviso. Su escala se fija contra el cuerpo de
  `1.0625rem`: una razón de 1.29, suficiente para marcar sección en un documento
  largo sin convertirse en titular.
- **Body** (400, `1.0625rem`, interlínea 1.65, gris de lectura): el cuerpo del
  aviso de privacidad, y solo ahí. La interlínea abierta y la medida de 68ch son
  lo que hace sostenible la lectura larga.
- **Body compacto** (400, `0.9375rem`, interlínea 1.45): el índice de servicios y
  los tres destinos accionables de la portada. El nombre del servicio va a 500
  para separarlo de su descripción sin cambiar de tamaño.
- **Small** (400, `0.8125rem`, interlínea 1.5, gris de etiqueta): pie de la
  portada y enlace de regreso del aviso.
- **Label** (500, `0.8125rem`, tracking 0.12em, versalita por `uppercase`, gris de
  etiqueta): las etiquetas de la columna de contacto —«CORREO», «WHATSAPP»—. Es
  el único lugar del sistema con mayúsculas y tracking abierto, y su trabajo es
  nombrar el campo de un dato, no anunciar la sección que viene después.

### Named Rules

**La Regla de la Voz Única.** Una sola familia en toda la superficie. La
diferencia entre un titular y una etiqueta se resuelve con tamaño, peso, valor y
tracking del mismo archivo de fuente. No se introduce una segunda familia para
«dar contraste», ni una monoespaciada para los teléfonos.

**La Regla del Tracking Inverso.** El tracking se cierra conforme el texto crece
(−0.038em en display, −0.012em en lead, normal en cuerpo) y solo se abre en el
peldaño más pequeño y en mayúsculas (+0.12em en label). Un tamaño intermedio con
tracking abierto no existe en este sistema.

**La Regla de los Numerales Tabulares.** Todo dato numérico que el lector va a
comparar o copiar —los dos teléfonos— lleva `tabular-nums`. Los dígitos de
ancho proporcional de Archivo desalinean dos números de la misma longitud
apilados, y un teléfono desalineado se lee como un teléfono descuidado.

**La Regla de la Etiqueta como Campo.** Las mayúsculas con tracking abierto están
reservadas a etiquetas que nombran el campo de un dato en una retícula de dos
columnas. No se usan como antetítulo, ni como categoría sobre un encabezado, ni
como rótulo de sección.

## Layout

**Modelo espacial.** Columna única alineada a la izquierda, centrada en la
ventana, con un solo eje vertical por página. No hay retícula multicolumna, no
hay tarjetas y no hay elementos centrados: lo único que se centra es el
contenedor, y su contenido se alinea a la izquierda sin excepción.

**Contenedores.** La portada usa un ancho máximo de `48rem`; el aviso, una medida
de `68ch` fijada en caracteres y no en rem, porque ahí el criterio es la línea de
lectura (60–75 caracteres) y no el ancho de la ventana.

**Márgenes y ritmo.** Un solo salto de escala, en `640px` (`sm`). El relleno
lateral pasa de `1.5rem` a `2.5rem`; el vertical de la portada se *aprieta* de
`4rem` a `3rem` y sus bloques de `3rem` a `2.25rem`, que es la maniobra que hace
entrar la página completa en 1280×800 sin desplazamiento. El aviso hace lo
inverso: su relleno vertical se *abre* de `4rem` a `6rem`, y sus secciones se
separan siempre por `2.75rem`.

**Retícula de etiqueta.** A partir de `640px`, tanto las filas de servicio como
las de contacto se resuelven como dos columnas alineadas por línea base: una
columna de etiqueta fija de `11.5rem` que no se encoge, y un espacio entre
columnas de `2rem`. Por debajo de `640px` ambas colapsan a filas apiladas con
`0.25rem` de separación. La columna fija es lo que produce el eje vertical único
que se ve en la captura de escritorio.

**Alto completo.** `html` y `body` toman la altura completa y el `main` de la
portada se centra verticalmente con `justify-center` sobre `min-h-full`, de modo
que la página se equilibra en pantallas altas en lugar de colgar del borde
superior.

### Named Rules

**La Regla del Eje Único.** Cada página tiene una sola línea vertical de la que
cuelga todo su contenido, y a partir de 640px un solo eje secundario —los
`11.5rem` de la columna de etiqueta— compartido por servicios y contacto. Prueba
de auditoría: tapa el texto de la portada en escritorio; deben quedar dos ejes
verticales, no tres.

**La Regla de las Dos Densidades.** La portada aprieta al crecer la ventana
porque su éxito es caber en una pantalla; el aviso abre al crecer porque su
éxito es sostener una lectura larga. Una superficie nueva elige una de las dos
densidades, y con ella el ritmo vertical completo; no se mezclan.

## Elevation & Depth

**El sistema no tiene sombras.** No hay ni un `box-shadow` ni un `text-shadow` en
la base de código, y no se añade uno. Tampoco hay superficies elevadas: existe un
único plano de fondo (`{colors.fondo}`) y nada se pinta encima de él con otro
relleno.

La profundidad —tal como existe— se transmite por dos vías. La primera es el
valor: tres peldaños de gris de texto sobre un fondo fijo hacen que el blanco
avance y el gris de etiqueta retroceda, lo que da capas sin geometría. La segunda
es la línea translúcida: un filete de blanco al 10% se lee como un corte en el
plano, no como el borde de un objeto apoyado sobre él.

### Named Rules

**La Regla del Plano Único.** Hay un fondo y solo uno. Ningún componente recibe
un color de relleno propio, un degradado, un desenfoque de fondo ni una sombra
—ni siquiera en hover—. Lo que necesita delimitarse usa un filete; lo que
necesita destacarse usa valor de texto.

## Shapes

Geometría rectangular de ángulos vivos. El sistema usa dos radios y ningún otro:
`9px` para el marco del monograma —el único elemento del sitio con esquinas
redondeadas— y `2px` para el anillo de foco, que redondea apenas lo suficiente
para no verse como un recuadro de depuración.

El vocabulario de forma se agota en tres piezas: el cuadro del monograma (3rem ×
3rem, contorno de 1px al 7%), la línea horizontal de 1px al 10% y el texto. No
hay contenedores, no hay tarjetas, no hay píldoras y no hay separadores
verticales.

**Íconos.** El único glifo gráfico del sitio es la flecha del enlace de regreso:
un SVG de 14×14 dibujado a mano, trazo `1.5`, extremos y uniones redondeados,
`stroke="currentColor"` para que herede el estado del enlace.

### Named Rules

**La Regla del Ícono Dibujado.** Un ícono es un SVG con trazo propio, nunca un
carácter tipográfico. La flecha de regreso se dibuja (`M11.5 7H2.5` /
`M6 3.5 2.5 7 6 10.5`) y no se escribe como `←` (U+2190): un glifo haciendo de
ícono hereda el peso y el ancho de la fuente en lugar del trazo del sistema, y se
desalinea en cuanto cambia la familia tipográfica —que en este proyecto va a
cambiar.

## Components

El sitio construyó cinco piezas reutilizables. No hay botones, no hay campos de
formulario, no hay navegación y no hay tarjetas; ninguno de los cuatro existe en
el producto y ninguno debe inventarse a partir de este documento.

### Monograma

Logotipo provisional, aislado en `app/Monograma.tsx` para que el reemplazo sea un
solo archivo.

- **Forma:** cuadro de 3rem × 3rem, esquinas suavemente redondeadas (`9px`),
  contorno de 1px en blanco al 7%.
- **Contenido:** `R&R` a `15px`, peso 600, tracking −0.035em, centrado óptica y
  geométricamente.
- **Color:** texto en blanco de papel frío, sin relleno de fondo.
- **Accesibilidad:** `aria-hidden="true"`; el nombre accesible lo da el `h1`
  inmediato, no el monograma.

### Enlace accionable

Los tres destinos de la portada —un correo y dos WhatsApp—, la única zona viva de
la página.

- **Tipografía:** body compacto (`0.9375rem`), blanco, `tabular-nums`.
- **Reposo:** subrayado en gris de etiqueta, desplazado `0.22em` de la línea base,
  grosor tomado de la fuente (`from-font`).
- **Hover y foco:** el subrayado pasa a blanco, con transición de 150ms sobre
  `text-decoration-color`. El texto no se mueve, no cambia de tamaño y no recibe
  fondo.
- **Área:** `w-fit`; el objetivo es el texto, no la fila entera.
- **Destino externo:** los enlaces `https://` abren en pestaña nueva con
  `rel="noopener noreferrer"`; `mailto:` no.

### Enlace tenue

Enlaces dentro de texto secundario: «Aviso de privacidad» en el pie de la portada
y el enlace de regreso del aviso.

- **Tipografía:** small (`0.8125rem`), gris de etiqueta, subrayado en gris de
  etiqueta.
- **Hover y foco:** texto *y* subrayado pasan a blanco simultáneamente —esta es
  la diferencia con el enlace accionable, que solo cambia el subrayado porque su
  texto ya es blanco.
- **Variante de regreso:** `inline-flex` con la flecha SVG de 14px y `0.5rem` de
  separación; la flecha hereda el color por `currentColor` y cambia con el texto.

### Fila de servicio

El índice vertical de cuatro servicios: una voz por línea, sin ícono, sin
titular, sin párrafo y sin llamada a la acción.

- **Estructura:** lista con filete superior en el contenedor y filete inferior en
  cada fila, de modo que las cuatro filas quedan encerradas entre cinco líneas
  sin formar una caja.
- **Escritorio (≥640px):** dos columnas alineadas por línea base, etiqueta de
  `11.5rem`, separación de `2rem`, relleno vertical de `0.8125rem`.
- **Móvil:** filas apiladas con `0.25rem` de separación y relleno vertical de
  `1rem`.
- **Color y peso:** nombre del servicio en blanco a peso 500; descripción en gris
  de lectura a peso 400, interlínea 1.45.
- **Estado:** ninguno. La fila no es interactiva y no responde al puntero.

### Etiqueta de columna

- **Tipografía:** label (`0.8125rem`, peso 500, mayúsculas, tracking 0.12em), gris
  de etiqueta.
- **Comportamiento:** `11.5rem` fijos y `shrink-0` a partir de 640px; ancho
  automático apilada por debajo.
- **Uso:** nombrar el canal de un dato de contacto. Nada más.

### Superficies del navegador

Tratadas como componente porque lo que no se dibuja también lleva el diseño: sin
esto, la selección, el cursor y la barra de desplazamiento llegan con los grises
por defecto de Chrome y Firefox, que no pertenecen a ningún sistema.

- **Selección:** fondo blanco, texto en el fondo casi negro (inversión completa).
- **Cursor de texto y `accent-color`:** blanco de papel frío.
- **Barra de desplazamiento:** `thin`, pulgar en gris de etiqueta sobre pista del
  fondo.
- **Anillo de foco:** uno solo en todo el sitio —contorno sólido de 2px en blanco,
  desplazado 3px, radio 2px— aplicado con `:focus-visible` sobre cualquier
  elemento enfocable. Ningún componente define su propio anillo.
- **Esquema:** `color-scheme: dark` declarado, para que los controles nativos y
  el color de sobredesplazamiento acompañen.

### Named Rules

**La Regla del Anillo Único.** El foco se ve igual en todo el sitio y se define
en un solo lugar (`:focus-visible` en `globals.css`). Un componente puede añadir
un cambio de color como refuerzo, pero nunca sustituir ni suprimir el anillo.

**La Regla del Movimiento Mínimo.** Lo único que se mueve es la respuesta al
puntero y al teclado: transiciones de color de 150ms. Sin animaciones de entrada,
sin parallax, sin contadores, sin desplazamiento suave. Bajo
`prefers-reduced-motion: reduce`, toda transición y animación cae a `0.01ms`.

## Do's and Don'ts

### Do:

- **Do** resolver toda jerarquía nueva con los tres recursos del sistema: valor
  de gris, peso tipográfico (400/500/600) y espacio.
- **Do** consumir los colores por token (`--color-fondo`, `--color-primero`,
  `--color-segundo`, `--color-tercero`, `--filete`, `--marco`). Un valor
  literal escrito en un componente es trabajo que habrá que rehacer en octubre
  de 2026.
- **Do** subrayar todo enlace en gris de etiqueta en reposo y llevarlo a blanco
  en hover **y** en foco, con transición de 150ms.
- **Do** mantener filetes y marcos en el rango de 7% a 10% de opacidad del blanco
  primario, y elegir 10% para separar contenido y 7% para contener.
- **Do** alinear una retícula nueva de dos columnas al eje existente de `11.5rem`
  a partir de 640px, y colapsarla a filas apiladas por debajo.
- **Do** poner `tabular-nums` en cualquier número que el lector vaya a comparar,
  copiar o marcar.
- **Do** dibujar los íconos como SVG con `stroke-width: 1.5` y `currentColor`.
- **Do** mantener la medida de lectura del contenido largo entre 60 y 75
  caracteres (el aviso usa `68ch`).
- **Do** mantener todo valor de marca dentro de `globals.css`, `layout.tsx` y
  `Monograma.tsx`, de modo que la identidad definitiva se instale sin tocar las
  páginas.

### Don't:

- **Don't** introducir un color de acento, un color semántico (éxito, error,
  advertencia) ni ningún valor fuera de los seis tokens declarados.
- **Don't** usar negro puro (`#000`) como fondo; el fondo es `#08090a` y esa
  diferencia es deliberada.
- **Don't** añadir sombras, degradados, desenfoques de fondo ni superficies
  elevadas. El sistema es un solo plano.
- **Don't** dibujar cajas: nada de contornos cerrados, rellenos de tarjeta ni
  bordes grises sólidos. Lo que necesite delimitarse usa un filete.
- **Don't** convertir el índice de servicios en una rejilla de tarjetas con
  ícono, titular, párrafo y botón. Esa es exactamente la forma que el proyecto
  rechaza.
- **Don't** introducir una segunda familia tipográfica, ni una monoespaciada para
  números o código.
- **Don't** usar un carácter tipográfico como ícono (`←`, `→`, `·` decorativo,
  viñetas dibujadas con texto).
- **Don't** usar mayúsculas con tracking abierto como antetítulo o rótulo sobre un
  encabezado; ese estilo pertenece a las etiquetas de campo de la retícula de
  contacto y a nada más.
- **Don't** suprimir el anillo de foco ni sustituirlo por un tratamiento local.
- **Don't** añadir animaciones de entrada, parallax, contadores ni transiciones
  que no sean respuesta directa al puntero o al teclado.
- **Don't** fabricar componentes que el producto no tiene —botones, campos,
  navegación, tarjetas, modales— a partir de este documento. Cuando alguno haga
  falta, se diseña contra estas reglas y se registra aquí.
