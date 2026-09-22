import type { Metadata } from "next";
import Link from "next/link";

/**
 * Aviso de privacidad.
 *
 * REGLA CRÍTICA: el texto es una transcripción LITERAL de
 * `privacidad/aviso-de-privacidad-r&r.md`. No se reescribe, no se
 * resume, no se "mejora", no se cambian plazos, no se cambia el nombre
 * de la autoridad, no se reordenan secciones. Es un documento legal
 * revisado: cualquier cambio de redacción es un cambio de obligación.
 *
 * Lo único sustituido son los cuatro marcadores, con los valores
 * confirmados por el responsable (ver PRODUCT.md > Brand Commitments):
 *   [correo] §4 y §7        -> root.and.run.automations@gmail.com
 *   [proveedor de correo] §6 -> Google LLC
 *   [dominio] §11            -> rootandrun.com
 *
 * Si detectas un error o una inconsistencia en el texto: repórtalo, no
 * lo corrijas.
 */

const URL_AVISO = "https://rootandrun.com/privacidad";
const TITULO = "Aviso de Privacidad — Root & Run";
const DESCRIPCION =
  "Aviso de privacidad de Root & Run, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.";

/**
 * Next reemplaza `openGraph` y `twitter` COMPLETOS cuando una página los
 * define: no los fusiona con los del layout. Por eso se repiten aquí el
 * tipo, el locale, el nombre del sitio y la imagen, con los mismos valores
 * que `app/layout.tsx`. Si cambian allá, cambian aquí.
 */
const IMAGEN_OG = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "Root & Run — estudio de desarrollo en Veracruz y Boca del Río, México.",
};

export const metadata: Metadata = {
  title: TITULO,
  description: DESCRIPCION,
  alternates: { canonical: URL_AVISO },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: URL_AVISO,
    siteName: "Root & Run",
    title: TITULO,
    description: DESCRIPCION,
    images: [IMAGEN_OG],
  },
  twitter: {
    card: "summary_large_image",
    title: TITULO,
    description: DESCRIPCION,
    images: [IMAGEN_OG],
  },
  robots: { index: false, follow: true },
};

const CORREO_PRIVACIDAD = "root.and.run.automations@gmail.com";

/**
 * Regreso al inicio. Se repite arriba y al pie: el documento mide
 * 4839px en escritorio y 6654px en móvil, y quien termina de leerlo
 * queda a esa distancia del único enlace de vuelta.
 *
 * La flecha es SVG dibujada, no el glifo Unicode U+2190: un carácter
 * tipográfico haciendo de ícono hereda el trazo de la fuente y no el
 * del sistema.
 */
function Regresar() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-[0.8125rem] text-[var(--color-tercero)] underline decoration-[var(--color-tercero)] transition-colors duration-150 hover:text-[var(--color-primero)] hover:decoration-[var(--color-primero)] focus-visible:text-[var(--color-primero)]"
    >
      <svg
        aria-hidden="true"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.5 7H2.5" />
        <path d="M6 3.5 2.5 7 6 10.5" />
      </svg>
      Root &amp; Run
    </Link>
  );
}

export default function Privacidad() {
  return (
    <main className="mx-auto w-full max-w-[68ch] px-6 py-16 sm:px-10 sm:py-24">
      <Regresar />

      <h1 className="mt-10 text-[clamp(2rem,7vw,2.75rem)] font-semibold leading-[1.1] tracking-[-0.032em]">
        Aviso de Privacidad
      </h1>

      <p className="mt-4 text-[0.875rem] text-[var(--color-tercero)]">
        <strong className="font-medium">Última actualización:</strong> 21 de
        septiembre de 2026
      </p>

      <div className="mt-14 flex flex-col gap-11 text-[1.0625rem] leading-[1.65] text-[var(--color-segundo)] [&_h2]:text-[1.375rem] [&_h2]:font-semibold [&_h2]:leading-[1.35] [&_h2]:tracking-[-0.015em] [&_h2]:text-[var(--color-primero)] [&_p+p]:mt-4 [&_strong]:font-medium [&_strong]:text-[var(--color-primero)] [&_ul]:mt-4 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-5 [&_li]:list-disc [&_li]:marker:text-[var(--color-tercero)]">
        <section>
          <h2>1. Responsable del tratamiento</h2>
          <p className="mt-4">
            <strong>Carlos Morales García</strong>, con domicilio en Condominio
            Tihuatlán número 41, Fraccionamiento Geo Villas del Puerto, C.P.
            91777, Veracruz, Veracruz, México, es el responsable del tratamiento
            de sus datos personales.
          </p>
          <p>
            Correo de contacto para asuntos de privacidad:{" "}
            <strong>
              <a
                href={`mailto:${CORREO_PRIVACIDAD}`}
                className="underline decoration-[var(--color-tercero)] transition-colors duration-150 hover:decoration-[var(--color-primero)]"
              >
                {CORREO_PRIVACIDAD}
              </a>
            </strong>
          </p>
        </section>

        <section>
          <h2>2. Datos personales que tratamos</h2>
          <p className="mt-4">
            <strong>De negocios y prospectos:</strong> nombre comercial,
            domicilio del establecimiento, teléfono, correo electrónico,
            perfiles públicos en redes sociales, dirección de sitio web e
            información pública de su ficha de negocio (calificación, número de
            reseñas, horarios).
          </p>
          <p>
            <strong>De quien nos contacta:</strong> nombre, teléfono, correo
            electrónico y el contenido del mensaje o solicitud.
          </p>
          <p>
            <strong>De clientes:</strong> además de lo anterior, los datos
            necesarios para prestar y facturar el servicio contratado.
          </p>
          <p>
            No tratamos datos personales sensibles. No solicitamos ni
            almacenamos datos bancarios, números de tarjeta ni credenciales de
            acceso a través de este sitio.
          </p>
        </section>

        <section>
          <h2>3. Origen de los datos</h2>
          <p className="mt-4">Obtenemos sus datos de dos maneras:</p>
          <p>
            <strong>a) Directamente de usted</strong>, cuando nos escribe, llena
            un formulario o contrata nuestros servicios.
          </p>
          <p>
            <strong>b) De fuentes de acceso público</strong>, como fichas de
            negocio en directorios y mapas en línea. Cuando el dato proviene de
            una fuente pública, se lo hacemos saber en el primer contacto, le
            indicamos de dónde lo obtuvimos y cómo pedir su baja.
          </p>
        </section>

        <section>
          <h2>4. Finalidades del tratamiento</h2>
          <p className="mt-4">
            <strong>Finalidades primarias</strong>, necesarias para la relación
            con usted:
          </p>
          <ul>
            <li>
              Contactarle para ofrecer nuestros servicios de desarrollo web,
              agentes de atención, automatizaciones y desarrollo de software.
            </li>
            <li>
              Atender solicitudes de información, elaborar propuestas y dar
              seguimiento a cotizaciones.
            </li>
            <li>
              Prestar, administrar y dar soporte a los servicios contratados.
            </li>
            <li>Cumplir obligaciones legales, fiscales y contractuales.</li>
          </ul>
          <p className="mt-4">
            <strong>Finalidades secundarias</strong>, que puede negar sin que
            afecte la relación con nosotros:
          </p>
          <ul>
            <li>
              Enviarle información sobre nuestros servicios, contenidos o
              novedades.
            </li>
          </ul>
          <p className="mt-4">
            Si no desea que sus datos se usen para las finalidades secundarias,
            escríbanos a{" "}
            <strong>
              <a
                href={`mailto:${CORREO_PRIVACIDAD}`}
                className="underline decoration-[var(--color-tercero)] transition-colors duration-150 hover:decoration-[var(--color-primero)]"
              >
                {CORREO_PRIVACIDAD}
              </a>
            </strong>{" "}
            y lo registramos de inmediato. Su negativa no es motivo para negarle
            ningún servicio.
          </p>
        </section>

        <section>
          <h2>5. Consentimiento</h2>
          <p className="mt-4">
            El consentimiento debe ser libre, específico e informado. Al
            proporcionarnos sus datos, o al continuar la comunicación con
            nosotros después del primer contacto y de haber recibido este aviso,
            consiente el tratamiento descrito aquí.
          </p>
          <p>
            Puede revocar su consentimiento en cualquier momento, conforme a la
            sección 7.
          </p>
        </section>

        <section>
          <h2>6. Encargados y terceros</h2>
          <p className="mt-4">
            Utilizamos proveedores de servicios tecnológicos que tratan datos
            por nuestra cuenta y bajo nuestras instrucciones, únicamente para
            las finalidades de este aviso:
          </p>
          <ul>
            <li>
              <strong>Vercel Inc.</strong> — alojamiento del sitio web.
            </li>
            <li>
              <strong>Supabase Inc.</strong> — base de datos y almacenamiento.
            </li>
            <li>
              <strong>Google LLC</strong> — correo electrónico.
            </li>
          </ul>
          <p className="mt-4">
            Algunos de estos proveedores procesan información en servidores
            ubicados fuera de México. Al contratarlos exigimos que mantengan
            medidas de protección equivalentes a las descritas en este aviso.
          </p>
          <p>
            No vendemos, alquilamos ni comercializamos sus datos personales. No
            los compartimos con terceros para fines promocionales propios de
            esos terceros.
          </p>
        </section>

        <section>
          <h2>7. Derechos ARCO y revocación del consentimiento</h2>
          <p className="mt-4">
            Usted tiene derecho a <strong>acceder</strong> a sus datos,{" "}
            <strong>rectificarlos</strong> cuando sean inexactos,{" "}
            <strong>cancelarlos</strong> cuando considere que no se requieren
            para las finalidades señaladas y <strong>oponerse</strong> a su
            tratamiento.
          </p>
          <p>
            Para ejercerlos, o para revocar su consentimiento, escriba a{" "}
            <strong>
              <a
                href={`mailto:${CORREO_PRIVACIDAD}`}
                className="underline decoration-[var(--color-tercero)] transition-colors duration-150 hover:decoration-[var(--color-primero)]"
              >
                {CORREO_PRIVACIDAD}
              </a>
            </strong>{" "}
            con el asunto &quot;Derechos ARCO&quot;, indicando:
          </p>
          <ul>
            <li>Su nombre y un medio para comunicarle la respuesta.</li>
            <li>El dato o los datos a los que se refiere su solicitud.</li>
            <li>
              El derecho que desea ejercer y, en su caso, el cambio solicitado.
            </li>
            <li>
              Un documento que acredite su identidad o, si actúa por medio de
              representante, la acreditación correspondiente.
            </li>
          </ul>
          <p className="mt-4">
            Responderemos en un plazo máximo de{" "}
            <strong>20 días hábiles</strong> contados desde la recepción de la
            solicitud y, de resultar procedente, la haremos efectiva dentro de
            los <strong>15 días hábiles</strong> siguientes.
          </p>
          <p>
            <strong>
              Para darse de baja de nuestras comunicaciones basta con pedirlo
              por el mismo medio por el que le escribimos.
            </strong>{" "}
            No requiere formato, identificación ni justificación. La baja es
            permanente y se aplica a todos nuestros registros.
          </p>
        </section>

        <section>
          <h2>8. Plazo de conservación</h2>
          <ul className="!mt-4">
            <li>
              <strong>
                Prospectos que no han iniciado una relación con nosotros:
              </strong>{" "}
              hasta <strong>12 meses</strong> contados desde el último contacto.
              Si no hay interacción en ese periodo, los datos se eliminan.
            </li>
            <li>
              <strong>Personas que solicitaron información:</strong> hasta{" "}
              <strong>24 meses</strong> desde la última comunicación.
            </li>
            <li>
              <strong>Clientes:</strong> durante la vigencia de la relación
              contractual y, después de concluida, por el plazo que exijan las
              obligaciones fiscales y legales aplicables.
            </li>
            <li>
              <strong>Solicitudes de baja:</strong> conservamos únicamente el
              dato mínimo necesario para no volver a contactarle.
            </li>
          </ul>
          <p className="mt-4">
            Cumplido el plazo, los datos se suprimen de nuestros sistemas y
            respaldos conforme a nuestro procedimiento interno.
          </p>
        </section>

        <section>
          <h2>9. Medidas de seguridad</h2>
          <p className="mt-4">
            Aplicamos medidas administrativas, técnicas y físicas razonables
            para proteger sus datos contra daño, pérdida, alteración,
            destrucción, uso, acceso o tratamiento no autorizado. Entre ellas:
            control de accesos por persona, cifrado de la información en
            tránsito, respaldos periódicos y acceso restringido a la base de
            datos solo al personal que lo requiere.
          </p>
          <p>
            Nos obliga el deber de confidencialidad respecto de los datos que
            tratamos, aun después de terminada la relación con usted.
          </p>
        </section>

        <section>
          <h2>10. Uso de cookies y tecnologías de rastreo</h2>
          <p className="mt-4">
            Nuestro sitio utiliza únicamente las cookies necesarias para su
            funcionamiento. Si en el futuro incorporamos herramientas de
            analítica o publicidad, este aviso se actualizará y se le informará
            antes de su uso.
          </p>
        </section>

        <section>
          <h2>11. Cambios al aviso de privacidad</h2>
          <p className="mt-4">
            Cualquier modificación a este aviso se publicará en{" "}
            <strong>rootandrun.com/privacidad</strong>, indicando la fecha de la
            última actualización. Le recomendamos consultarlo periódicamente.
          </p>
        </section>

        <section>
          <h2>12. Autoridad competente</h2>
          <p className="mt-4">
            Si considera que su derecho a la protección de datos personales ha
            sido vulnerado, o presume un uso indebido de sus datos, puede
            presentar su inconformidad ante la{" "}
            <strong>Secretaría Anticorrupción y Buen Gobierno</strong>,
            autoridad competente en materia de protección de datos personales en
            posesión de los particulares tras la extinción del INAI.
          </p>
        </section>

        <hr className="border-[var(--filete)]" />

        <p className="text-[0.9375rem] italic leading-[1.6] text-[var(--color-tercero)]">
          Este aviso se emite conforme a la Ley Federal de Protección de Datos
          Personales en Posesión de los Particulares publicada en el Diario
          Oficial de la Federación el 20 de marzo de 2025 y vigente desde el 21
          de marzo de 2025.
        </p>

        <Regresar />
      </div>
    </main>
  );
}
