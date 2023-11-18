"use client";
import React from "react";
import { useDispatch } from "react-redux";

import { addBooking } from "@/redux/features/bookSlice";
import { AppDispatch } from "@/redux/store";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { BookingItem } from "../../../interfaces";

export default function BookingForm({
  Profile,
  hospitalJsonReady,
}: {
  Profile: object;
  hospitalJsonReady: Object;
}) {
  const [hospital, setHospital] = React.useState<string>(
    hospitalJsonReady.data[0].name
  );
  const [firstname, setFirstname] = React.useState<string>(
    Profile.name != undefined ? Profile.name : ""
  );
  const [lastname, setLastname] = React.useState<string>("¯\\_(ツ)_/¯");
  const [nationalId, setNationalId] = React.useState<string>("");
  const [date, setDate] = React.useState<Date | null>(null);

  const dispatch = useDispatch<AppDispatch>();

  const makeBooking = () => {
    if (firstname && lastname && nationalId && hospital && date) {
      const item: BookingItem = {
        firstname: firstname,
        lastname: lastname,
        nationalIdCard: nationalId,
        hospitalName: hospital,
        date: date,
      };
      dispatch(addBooking(item));
      alert("Booking Submited");
      // alert(firstname + lastname + nationalId + hospital + date.toString());
    } else alert("Some Field Missing");
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[100px]">
      <div className="text-xl font-medium">Vaccine Reservation</div>
      {Profile.name != undefined ? (
        <>
          <TextField
            id="outlined-basic"
            label="Firstname"
            variant="outlined"
            defaultValue={Profile.name}
            disabled
          />
          <TextField
            id="outlined-basic"
            label="Lastname"
            variant="outlined"
            defaultValue={"¯\\_(ツ)_/¯"}
            disabled
          />
        </>
      ) : (
        <>
          <TextField
            id="outlined-basic"
            label="Firstname"
            variant="outlined"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Lastname"
            variant="outlined"
            onChange={(e) => setLastname(e.target.value)}
          />
        </>
      )}
      <TextField
        id="outlined-basic"
        label="Citizen ID"
        variant="outlined"
        onChange={(e) => setNationalId(e.target.value)}
      />
      <div className="text-md text-left text-gray*600">Hospital</div>
      <div className="text-md text-left text-gray*600">Reservation Date</div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Booking Date"
          value={date}
          onChange={(value) => {
            setDate(value);
          }}
        />
      </LocalizationProvider>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Hospital"
        value={hospital}
        onChange={(event: SelectChangeEvent) => {
          setHospital(event.target.value as string);
        }}
      >
        {hospitalJsonReady.data.map((hospitalItem: Object) => (
          <MenuItem value={hospitalItem.name}>{hospitalItem.name}</MenuItem>
        ))}
      </Select>
      <button
        type="submit"
        className="rounded-md bg-gray-200 px-3 py-2 m-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300"
        onClick={makeBooking}
      >
        Submit Booking
      </button>
    </main>
  );
}
