"use client";
import React from "react";

import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function BookingForm(Profile: object) {
  const [hospital, setHospital] = React.useState("Chulalongkorn Hospital");
  const handleChange = (event: SelectChangeEvent) => {
    setHospital(event.target.value as string);
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[100px]">
      <div className="text-xl font-medium">Vaccine Reservation</div>
      {Profile.Profile.name != undefined ? (
        <>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            defaultValue={Profile.Profile.name}
            disabled
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            defaultValue={Profile.Profile.email}
            disabled
          />
          <TextField
            id="outlined-basic"
            label="Tel"
            variant="outlined"
            defaultValue={Profile.Profile.tel}
            disabled
          />
          <TextField
            id="outlined-basic"
            label="Member Since"
            variant="outlined"
            defaultValue={Profile.Profile.createAt}
            disabled
          />
        </>
      ) : (
        <>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Email" variant="outlined" />
          <TextField id="outlined-basic" label="Tel" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Member Since"
            variant="outlined"
          />
        </>
      )}

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
