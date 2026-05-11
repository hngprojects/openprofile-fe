"use server";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";
import { apiFetch, extractTokensFromResponse } from "@/lib/api";

export type AuthState = { error?: string } | undefined;

export async function emailSignup(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const fullName = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!fullName || !email || !password)
    return { error: "All fields are required." };

  const res = await apiFetch("/api/auth/register", {
    method: "POST",
    body: { fullName, email, password },
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    console.error(
      "[signup] status:",
      res.status,
      "body:",
      JSON.stringify(data)
    );
    return {
      error: data.message ?? data.error ?? data.detail ?? "Signup failed.",
    };
  }

  redirect(`/verify-email?email=${encodeURIComponent(email)}`);
}

export async function emailLogin(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) return { error: "Email and password are required." };

  const res = await apiFetch("/api/auth/login", {
    method: "POST",
    body: { email, password },
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    return { error: data.message ?? "Invalid credentials." };
  }

  const { accessToken, refreshToken } = extractTokensFromResponse(res.headers);
  if (!accessToken || !refreshToken) {
    return {
      error: "Login succeeded but no session was returned. Please try again.",
    };
  }
  await createSession({ accessToken, refreshToken });

  redirect("/dashboard");
}

export async function logout() {
  await apiFetch("/api/auth/logout", { method: "POST" });
  await deleteSession();
  redirect("/login");
}

export async function forgotPassword(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get("email") as string;
  if (!email) return { error: "Email is required." };

  const res = await apiFetch("/api/auth/forgot-password", {
    method: "POST",
    body: { email },
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    return { error: data.message ?? "Failed to send reset email." };
  }

  redirect(`/forgot-password/verify?email=${encodeURIComponent(email)}`);
}

export async function resetPassword(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const token = formData.get("token") as string;
  const password = formData.get("password") as string;

  if (!token || !password) return { error: "Missing required fields." };

  const res = await apiFetch("/api/auth/reset-password", {
    method: "POST",
    body: { token, password },
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    return { error: data.message ?? "Password reset failed." };
  }

  redirect("/forgot-password/success");
}

export async function verifyEmailOtp(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = formData.get("email") as string;
  const otp = formData.get("otp") as string;

  if (!email || !otp) return { error: "Missing email or code." };

  const res = await apiFetch("/api/auth/verify-otp", {
    method: "POST",
    body: { email, otp },
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    return { error: data.message ?? "Verification failed." };
  }

  redirect("/verify-email/success");
}

export async function getCurrentUser() {
  const res = await apiFetch("/api/auth/me");
  if (!res.ok) return null;
  return await res.json();
}

export async function refreshToken() {
  const { getSession, createSession } = await import("@/lib/session");
  const session = await getSession();

  if (!session?.refreshToken) return { error: "No refresh token available." };

  const res = await apiFetch("/api/auth/refresh", {
    method: "POST",
    body: { refreshToken: session.refreshToken },
  });

  if (!res.ok) return { error: "Session expired." };

  const { accessToken, refreshToken: newRefreshToken } = await res.json();
  await createSession({ accessToken, refreshToken: newRefreshToken });
  return { success: true };
}
