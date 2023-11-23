import { BACKEND_URL } from "@/config/env";

export default async function getDentist() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(BACKEND_URL + "/api/v1/dentists");
  if (!response.ok) {
    throw new Error("Failed to fetch hospitals");
  }
  return await response.json();
}
