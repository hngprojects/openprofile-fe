import { type NextRequest, NextResponse } from "next/server";
import { createSession } from "@/lib/session";

/**
 * GET /auth/callback?token=<jwt_from_backend>
 *
 * The backend redirects here after Google OAuth succeeds.
 * It passes the user's token (or user ID) as a query param.
 *
 * TODO: Adjust the param name / verification logic once the backend API is ready.
 */
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(
      new URL("/login?error=missing_token", request.url)
    );
  }

  // TODO: Optionally verify the token with the backend before trusting it.
  // For now we treat the token value as the userId placeholder.
  await createSession(token);

  return NextResponse.redirect(new URL("/dashboard", request.url));
}
