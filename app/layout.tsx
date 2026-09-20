import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

/**
 * Archivo, grotesco de la familia Franklin. Autoalojada: la build no
 * depende de alcanzar Google, lo que importa al construir en Docker.
 * Fuente variable con ejes de peso y ancho.
 */
const archivo = localFont({
  src: "./fonts/Archivo.ttf",
  variable: "--font-archivo",
  display: "swap",
  weight: "100 900",
  declarations: [{ prop: "font-stretch", value: "62% 125%" }],
});

const SITIO = "https://rootandrun.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: "Root & Run — Estudio de desarrollo en Veracruz",
  description: "Software que hace el trabajo que hoy haces a mano.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITIO,
    siteName: "Root & Run",
    title: "Root & Run — Estudio de desarrollo en Veracruz",
    description: "Software que hace el trabajo que hoy haces a mano.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Root & Run — estudio de desarrollo en Veracruz y Boca del Río, México.",
      },
    ],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className={`${archivo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
