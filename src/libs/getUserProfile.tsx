import { BACKEND_URL } from "@/config/env";

export default async function userProfile(token: string) {
  const response = await fetch(BACKEND_URL + "/api/v1/auth/me", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch user profile");
  }
  return await response.json();
}
