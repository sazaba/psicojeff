import { withAuth } from "next-auth/middleware";

export default withAuth({
  // Opcional: Aquí puedes configurar páginas personalizadas si lo necesitas
  pages: {
    signIn: "/login",
  },
});

export const config = {
  // Protegemos todas las rutas que empiecen por /admin
  matcher: ["/admin/:path*"],
};