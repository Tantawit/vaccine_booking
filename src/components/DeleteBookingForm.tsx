"use client";
import React from "react";

import { BACKEND_URL } from "@/config/env";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

export default function DeleteBookingForm({
  token,
  bookings,
}: {
  token: any;
  bookings: any;
}) {
  const [id, setId] = React.useState<string>("");

  const handleDeleteBooking = async () => {
    if (id) {
      try {
        const response = await fetch(BACKEND_URL + "/api/v1/bookings/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });

        if (response.ok) {
          alert("Delete booking successfully!");
        } else {
          alert("Failed to delete booking");
        }
      } catch (error) {
        console.error("Error during delete booking:", error);
      }
    } else alert("Some Field Missing");
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[300px]">
      <div className="text-xl font-medium">Delete Booking</div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Dentist"
        value={id}
        onChange={(event: SelectChangeEvent) => {
          setId(event.target.value);
        }}
      >
        {bookings.data.map((bookingItem: Object) => (
          <MenuItem value={bookingItem._id}>{bookingItem._id}</MenuItem>
        ))}
      </Select>

      <button
        type="submit"
        className="rounded-md bg-gray-200 px-3 py-2 m-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300"
        onClick={handleDeleteBooking}
      >
        Submit Delete Booking
      </button>
    </main>
  );
}
