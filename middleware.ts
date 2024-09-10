import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.redirect(new URL("/evaluation-form", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
