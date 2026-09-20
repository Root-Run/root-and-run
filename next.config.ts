import type { NextConfig } from "next";

/**
 * Toda la configuración vive aquí, no en `vercel.json`.
 * El proyecto se despliega hoy en Vercel como alojamiento temporal y
 * migrará a Docker sobre VPS propio: nada puede depender de la plataforma.
 * Ver PRODUCT.md > Stack.
 */
const nextConfig: NextConfig = {
  // Build autocontenido para la imagen de Docker.
  output: "standalone",

  // Sin runtime `edge`, sin ISR, sin revalidación de plataforma:
  // el sitio es estático y no los necesita.
};

export default nextConfig;
