"use client";
import React from "react";

import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function BookingForm() {
  const [hospital, setHospital] = React.useState("Chulalongkorn Hospital");
  const handleChange = (event: SelectChangeEvent) => {
    setHospital(event.target.value as string);
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[100px]">
      <div className="text-xl font-medium">Vaccine Reservation</div>
      <TextField id="outlined-basic" label="Firstname" variant="outlined" />
      <TextField id="outlined-basic" label="Lastname" variant="outlined" />
      <TextField id="outlined-basic" label="Citizen ID" variant="outlined" />
      <div className="text-md text-left text-gray*600">Reservation Date</div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker className="bg-white" />
      </LocalizationProvider>
      <div className="text-md text-left text-gray*600">Hospital</div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Hospital"
        value={hospital}
        onChange={handleChange}
      >
        <MenuItem value="Chulalongkorn Hospital">
          Chulalongkorn Hospital
        </MenuItem>
        <MenuItem value="Rajavithi Hospital">Rajavithi Hospital</MenuItem>
        <MenuItem value="Thammasat University Hospital">
          Thammasat University Hospital
        </MenuItem>
      </Select>
    </main>
  );
}
