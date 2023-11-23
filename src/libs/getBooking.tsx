import { BACKEND_URL } from "@/config/env";

export default async function getBooking(token: string) {
  const response = await fetch(BACKEND_URL + "/api/v1/bookings", {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch booking");
  }
  return await response.json();
}
