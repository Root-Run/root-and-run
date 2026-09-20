/**
 * MARCADOR DE POSICIÓN — no es la portada.
 *
 * El stack está inicializado; la portada se construye en el siguiente
 * paso, sobre el brief acordado. Este archivo existe solo para que la
 * ruta responda y la build pase.
 *
 * Al construir la portada, sustituir por completo. Ver PRODUCT.md.
 */
export default function Home() {
  return (
    <main className="flex min-h-full items-center px-6">
      <p className="text-[var(--color-segundo)]">
        Root &amp; Run — stack inicializado.
      </p>
    </main>
  );
}
