"use server";
import { redirect } from "next/navigation";
import { deleteSession } from "@/lib/session";

export type AuthState = { error?: string } | undefined;

export async function emailSignup(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!name || !email || !password)
    return { error: "All fields are required." };

  // TODO: call backend when ready
  // const res = await fetch(`${env.API_BASE_URL}/auth/signup`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ name, email, password }),
  // });
  // if (!res.ok) return { error: (await res.json()).message ?? "Signup failed." };
  // const { userId } = await res.json();
  // await createSession(userId);

  redirect("/verify-email");
}

export async function emailLogin(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) return { error: "Email and password are required." };

  // TODO: call backend when ready
  // const res = await fetch(`${env.API_BASE_URL}/auth/login`, {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ email, password }),
  // });
  // if (!res.ok) return { error: (await res.json()).message ?? "Invalid credentials." };
  // const { userId } = await res.json();
  // await createSession(userId);

  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
