// middleware.ts
export { default } from "next-auth/middleware";

export const config = {
  // Aquí definimos qué rutas están protegidas.
  // El * significa "todo lo que esté dentro de admin"
  matcher: ["/admin/:path*"],
};