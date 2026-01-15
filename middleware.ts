import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";

// En lugar de "export default", usamos la función explícita "middleware"
export async function middleware(req: NextRequest) {
  // 1. Verificamos si existe una sesión válida (token)
  // Nota: Esto usa la variable NEXTAUTH_SECRET que ya pusiste en Vercel
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // 2. Si NO hay sesión (usuario no logueado)
  if (!session) {
    // Lo mandamos al login
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  // 3. Si SÍ hay sesión, lo dejamos pasar
  return NextResponse.next();
}

// Configuración: Solo proteger las rutas que empiecen por /admin
export const config = {
  matcher: ["/admin/:path*"],
};