import "server-only";
import { env } from "@/env/server";
import { getSession, createSession, deleteSession } from "@/lib/session";
import { unauthorized } from "next/navigation";

type ApiOptions = Omit<RequestInit, "body"> & { body?: unknown };

export async function apiFetch(path: string, options: ApiOptions = {}) {
  const session = await getSession();
  const { body, headers, ...rest } = options;

  const requestConfig: RequestInit = {
    ...rest,
    headers: {
      "Content-Type": "application/json",
      ...(session?.accessToken
        ? { Authorization: `Bearer ${session.accessToken}` }
        : {}),
      ...headers,
    },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  };

  let res = await fetch(`${env.API_BASE_URL}${path}`, requestConfig);

  // If unauthorized, attempt to refresh the token using the refresh token
  if (
    res.status === 401 &&
    session?.refreshToken &&
    path !== "/api/auth/refresh"
  ) {
    const refreshRes = await fetch(`${env.API_BASE_URL}/api/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: session.refreshToken }),
    });

    if (refreshRes.ok) {
      const { accessToken, refreshToken } = await refreshRes.json();

      try {
        await createSession({ accessToken, refreshToken });
      } catch (e) {
        // In Server Components, createSession will throw because cookies cannot be modified.
        // We throw unauthorized() to trigger the Next.js boundary instead.
        unauthorized();
      }

      // Retry the original request with the new access token
      const retryConfig: RequestInit = {
        ...requestConfig,
        headers: {
          ...requestConfig.headers,
          Authorization: `Bearer ${accessToken}`,
        },
      };

      res = await fetch(`${env.API_BASE_URL}${path}`, retryConfig);
    } else {
      try {
        await deleteSession();
      } catch (e) {
        unauthorized();
      }
    }
  }

  return res;
}
