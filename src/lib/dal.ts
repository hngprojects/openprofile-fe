import "server-only";
import { cache } from "react";
import { redirect } from "next/navigation";
import { decrypt, getSessionToken } from "@/lib/session";

export const getSession = cache(async () => {
  const token = await getSessionToken();
  if (!token) return null;
  return decrypt(token);
});

export const verifySession = cache(async () => {
  const session = await getSession();
  if (!session?.userId) redirect("/login");
  return session;
});
