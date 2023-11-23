"use client";
import React from "react";

import { BACKEND_URL } from "@/config/env";
import { TextField } from "@mui/material";

export default function AddDentistForm(token: any) {
  const [name, setName] = React.useState<string>("");
  const [hospital, setHospital] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [expertist, setExpertist] = React.useState<string>("");
  const [tel, setTel] = React.useState<string>("");
  const [picture, setPicture] = React.useState<string>("");

  const handleAddDentist = async () => {
    if (name && tel && hospital && address && expertist && picture) {
      try {
        const response = await fetch(BACKEND_URL + "/api/v1/dentists", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token.token,
          },
          body: JSON.stringify({
            name: name,
            hospital: hospital,
            address: address,
            expertist: expertist,
            tel: tel,
            picture: picture,
          }),
        });

        if (response.ok) {
          alert("Add dentist successfully!");
        } else {
          alert("Failed to add dentist");
        }
      } catch (error) {
        console.error("Error during add dentist:", error);
      }
    } else alert("Some Field Missing");
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[300px]">
      <div className="text-xl font-medium">Add Dentist</div>
      <TextField
        id="outlined-basic"
        label="Dentist Name"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Dentist Hospital"
        variant="outlined"
        onChange={(e) => setHospital(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Dentist Address"
        variant="outlined"
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Dentist Expertist"
        variant="outlined"
        onChange={(e) => setExpertist(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Dentist Phone"
        variant="outlined"
        onChange={(e) => setTel(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Dentist Image URL"
        variant="outlined"
        onChange={(e) => setPicture(e.target.value)}
      />

      <button
        type="submit"
        className="rounded-md bg-gray-200 px-3 py-2 m-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300"
        onClick={handleAddDentist}
      >
        Submit Add Dentist
      </button>
    </main>
  );
}
