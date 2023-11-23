"use client";
import React from "react";

import { BACKEND_URL } from "@/config/env";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function BookingForm({
  token,
  dentists,
}: {
  token: any;
  dentists: any;
}) {
  const [id, setId] = React.useState<string>("");
  const [bookingDate, setBookingDate] = React.useState<Date | null>(null);

  const handleBooking = async () => {
    if (id && bookingDate) {
      try {
        const response = await fetch(
          BACKEND_URL + "/api/v1/dentists/" + id + "/bookings",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + token,
            },
            body: JSON.stringify({
              bookingDate: bookingDate,
            }),
          }
        );

        if (response.ok) {
          alert("Booking successfully!");
        } else {
          alert("Failed to booking");
        }
      } catch (error) {
        console.error("Error during booking:", error);
      }
    } else alert("Some Field Missing");
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[100px]">
      <div className="text-xl font-medium">Booking Dentist</div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Dentist"
        value={id}
        onChange={(event: SelectChangeEvent) => {
          setId(event.target.value);
        }}
      >
        {dentists.data.map((dentistItem: Object) => (
          <MenuItem value={dentistItem.id}>{dentistItem.name}</MenuItem>
        ))}
      </Select>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Booking Date"
          value={bookingDate}
          onChange={(value) => {
            setBookingDate(value);
          }}
        />
      </LocalizationProvider>

      <button
        type="submit"
        className="rounded-md bg-gray-200 px-3 py-2 m-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300"
        onClick={handleBooking}
      >
        Submit Booking Dentist
      </button>
    </main>
  );
}
