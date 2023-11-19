"use client";
import { revalidatePath } from "next/cache";
import React from "react";

import { dbConnect } from "@/db/dbConnect";
import Hospital from "@/db/models/Hospital";
import { TextField } from "@mui/material";

export default function AddHospitalForm() {
  const [name, setName] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [district, setDistrict] = React.useState<string>("");
  const [province, setProvince] = React.useState<string>("");
  const [postalcode, setPostalcode] = React.useState<string>("");
  const [tel, setTel] = React.useState<string>("");
  const [picture, setPicture] = React.useState<string>("");

  const addHospital = async () => {
    try {
      await dbConnect();
      const hospital = await Hospital.create({
        name: name,
        address: address,
        district: district,
        province: province,
        postalcode: postalcode,
        tel: tel,
        picture: picture,
      });
    } catch (error) {
      console.log(error);
    }
    revalidatePath("/hospital");
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[100px]">
      <div className="text-xl font-medium">Vaccine Reservation</div>
      <TextField
        id="outlined-basic"
        label="Hospital Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Hospital Address"
        variant="outlined"
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Hospital District"
        variant="outlined"
        onChange={(e) => setDistrict(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Hospital Province"
        variant="outlined"
        onChange={(e) => setProvince(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Hospital Postalcode"
        variant="outlined"
        onChange={(e) => setPostalcode(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Hospital Tel."
        variant="outlined"
        onChange={(e) => setTel(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Hospital Picture URL"
        variant="outlined"
        onChange={(e) => setPicture(e.target.value)}
      />

      <button
        type="submit"
        className="rounded-md bg-gray-200 px-3 py-2 m-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300"
        onClick={addHospital}
      >
        Add Hospital
      </button>
    </main>
  );
}
