import { NextRequest, NextResponse } from "next/server";

const goneRoutes = new Set([
  "/hello-world",
  "/video-post",
  "/nulla-magna",
  "/ambrose-redmoon",
  "/the-field",
  "/magna-fringilla-quis-condimentum",
  "/be-my-guest",
  "/porttitor-porttitor-mollis-vitae-placerat",
  "/porttitor-porttitor-mollis-vitae-placerat-2",
]);

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/portfolio/") || goneRoutes.has(pathname)) {
    return new NextResponse(null, { status: 410 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/portfolio/:path*",
    "/hello-world",
    "/video-post",
    "/nulla-magna",
    "/ambrose-redmoon",
    "/the-field",
    "/magna-fringilla-quis-condimentum",
    "/be-my-guest",
    "/porttitor-porttitor-mollis-vitae-placerat",
    "/porttitor-porttitor-mollis-vitae-placerat-2",
  ],
};
