import { NextRequest, NextResponse } from "next/server";

/**
 * Staging Basic Auth — browser ID/password popup.
 * Enabled only when BASIC_AUTH_USER and BASIC_AUTH_PASSWORD are set.
 */
export function middleware(request: NextRequest) {
  const user = process.env.BASIC_AUTH_USER;
  const password = process.env.BASIC_AUTH_PASSWORD;

  if (!user || !password) {
    return NextResponse.next();
  }

  const authorization = request.headers.get("authorization");
  if (authorization?.startsWith("Basic ")) {
    const encoded = authorization.slice("Basic ".length);
    try {
      const decoded = atob(encoded);
      const colon = decoded.indexOf(":");
      const authUser = decoded.slice(0, colon);
      const authPassword = decoded.slice(colon + 1);
      if (authUser === user && authPassword === password) {
        return NextResponse.next();
      }
    } catch {
      // fall through to 401
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Yuya Kigure Portfolio"',
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
