import Link from "next/link";

import { Monograma } from "./Monograma";

/**
 * Portada. Su trabajo es que un desconocido con sospecha confirme en
 * diez segundos que hay dos personas reales detrás del mensaje que
 * acaba de recibir. No es una landing de ventas.
 *
 * Las cuatro líneas de SERVICIOS nombran el trabajo que quitan, no la
 * tecnología que usan. Están PENDIENTES DE REVISIÓN del cliente.
 */

const SERVICIOS = [
  {
    nombre: "Desarrollo web",
    trabajo: "El sitio que tu negocio no ha tenido tiempo de hacer.",
  },
  {
    nombre: "Agentes de IA",
    trabajo: "Atención que responde cuando tú no puedes.",
  },
  {
    nombre: "Automatizaciones con IA",
    trabajo: "Lo que hoy copias y pegas todos los días.",
  },
  {
    nombre: "Desarrollo de software",
    trabajo: "La herramienta que tu operación necesita y no existe.",
  },
];

const CONTACTO = [
  {
    etiqueta: "Correo",
    valor: "root.and.run.automations@gmail.com",
    href: "mailto:root.and.run.automations@gmail.com",
  },
  {
    etiqueta: "WhatsApp",
    valor: "229 525 1975",
    href: "https://wa.me/522295251975",
  },
  {
    etiqueta: "WhatsApp",
    valor: "229 481 0718",
    href: "https://wa.me/522294810718",
  },
];

export default function Home() {
  return (
    // El brief pide una sola pantalla en escritorio: el ritmo vertical se
    // aprieta a partir de sm para que el pie entre sin scroll a 1280x800.
    <main className="mx-auto flex min-h-full w-full max-w-3xl flex-col justify-center gap-12 px-6 py-16 sm:gap-9 sm:px-10 sm:py-12">
      <header className="flex flex-col gap-7">
        <Monograma />

        <div>
          <h1 className="text-[clamp(2.75rem,10vw,4.25rem)] font-semibold leading-[1.02] tracking-[-0.038em]">
            Root &amp; Run
          </h1>
          <p className="mt-4 max-w-[30ch] text-balance text-[clamp(1.125rem,4.4vw,1.5rem)] leading-[1.4] tracking-[-0.012em] text-[var(--color-segundo)]">
            Software que hace el trabajo que hoy haces a mano.
          </p>
        </div>
      </header>

      <section aria-labelledby="servicios">
        <h2 id="servicios" className="sr-only">
          Servicios
        </h2>
        <ul className="border-t border-[var(--filete)]">
          {SERVICIOS.map((servicio) => (
            <li
              key={servicio.nombre}
              className="flex flex-col gap-1 border-b border-[var(--filete)] py-4 sm:flex-row sm:items-baseline sm:gap-8 sm:py-[0.8125rem]"
            >
              <span className="text-[0.9375rem] font-medium sm:w-[11.5rem] sm:shrink-0">
                {servicio.nombre}
              </span>
              <span className="text-[0.9375rem] leading-[1.45] text-[var(--color-segundo)]">
                {servicio.trabajo}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="contacto">
        <h2 id="contacto" className="sr-only">
          Contacto
        </h2>
        <ul className="flex flex-col gap-3">
          {CONTACTO.map((via) => (
            <li
              key={via.href}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-[var(--color-tercero)] sm:w-[11.5rem] sm:shrink-0">
                {via.etiqueta}
              </span>
              <a
                href={via.href}
                className="w-fit text-[0.9375rem] tabular-nums underline decoration-[var(--color-tercero)] transition-colors duration-150 hover:decoration-[var(--color-primero)] focus-visible:decoration-[var(--color-primero)]"
                {...(via.href.startsWith("https://")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {via.valor}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="flex flex-col gap-2 border-t border-[var(--filete)] pt-7 sm:pt-6 text-[0.8125rem] leading-[1.5] text-[var(--color-tercero)]">
        <p>Veracruz · Boca del Río, México</p>
        <p>
          Sitio en desarrollo.{" "}
          <Link
            href="/privacidad"
            className="underline decoration-[var(--color-tercero)] transition-colors duration-150 hover:text-[var(--color-primero)] hover:decoration-[var(--color-primero)] focus-visible:text-[var(--color-primero)]"
          >
            Aviso de privacidad
          </Link>
        </p>
      </footer>
    </main>
  );
}
