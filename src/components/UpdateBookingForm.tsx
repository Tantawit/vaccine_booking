"use client";
import React from "react";

import { BACKEND_URL } from "@/config/env";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function UpdateBookingForm({
  token,
  bookings,
}: {
  token: any;
  bookings: any;
}) {
  const [id, setId] = React.useState<string>("");
  const [bookingDate, setBookingDate] = React.useState<Date | null>(null);

  // const handleSelectBooking = (id: string) => {
  //   setId(id);

  //   for (const booking of bookings.data) {
  //     if (booking._id == id) {
  //       setBookingDate(booking.bookingDate);
  //     }
  //   }
  // };

  const handleUpdateBooking = async () => {
    if (id && bookingDate) {
      try {
        const response = await fetch(BACKEND_URL + "/api/v1/bookings/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
          body: JSON.stringify({
            bookingDate: bookingDate,
          }),
        });

        if (response.ok) {
          alert("Update booking successfully!");
        } else {
          alert("Failed to update booking");
        }
      } catch (error) {
        console.error("Error during update booking:", error);
      }
    } else alert("Some Field Missing");
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[300px]">
      <div className="text-xl font-medium">Update Booking</div>
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
        onClick={handleUpdateBooking}
      >
        Submit Update Booking
      </button>
    </main>
  );
}
