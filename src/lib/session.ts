import "server-only";
import { cookies } from "next/headers";

const COOKIE_NAME = "session";
const EXPIRES_IN = 7 * 24 * 60 * 60 * 1000; // 7 days

export async function createSession(token: string) {
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: new Date(Date.now() + EXPIRES_IN),
    path: "/",
  });
}

export async function deleteSession() {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function getSessionToken() {
  const store = await cookies();
  return store.get(COOKIE_NAME)?.value ?? null;
}

export function decrypt(token: string) {
  // TODO: implement actual decryption/verification
  return { userId: token };
}
