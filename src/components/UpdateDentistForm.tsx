"use client";
import React from "react";

import { BACKEND_URL } from "@/config/env";
import { MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";

export default function UpdateDentistForm({
  token,
  dentists,
}: {
  token: any;
  dentists: any;
}) {
  const [id, setId] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [hospital, setHospital] = React.useState<string>("");
  const [address, setAddress] = React.useState<string>("");
  const [expertist, setExpertist] = React.useState<string>("");
  const [tel, setTel] = React.useState<string>("");
  const [picture, setPicture] = React.useState<string>("");

  const handleSelectDentist = (id: string) => {
    setId(id);

    for (const dentist of dentists.data) {
      console.log(dentist);
      if (dentist.id == id) {
        setName(dentist.name);
        setHospital(dentist.hospital);
        setAddress(dentist.address);
        setExpertist(dentist.expertist);
        setTel(dentist.tel);
        setPicture(dentist.picture);
      }
    }
  };

  const handleUpdateDentsit = async () => {
    if (name && tel && hospital && address && expertist && picture) {
      try {
        const response = await fetch(BACKEND_URL + "/api/v1/dentists/" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
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
          alert("Update dentist successfully!");
        } else {
          alert("Failed to update dentist");
        }
      } catch (error) {
        console.error("Error during update dentist:", error);
      }
    } else alert("Some Field Missing");
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[300px]">
      <div className="text-xl font-medium">Update Dentist</div>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Dentist"
        value={id}
        onChange={(event: SelectChangeEvent) => {
          handleSelectDentist(event.target.value);
        }}
      >
        {dentists.data.map((dentistItem: Object) => (
          <MenuItem value={dentistItem.id}>{dentistItem.name}</MenuItem>
        ))}
      </Select>
      <TextField
        id="outlined-basic"
        label="Dentist Name"
        variant="outlined"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Dentist Hospital"
        variant="outlined"
        value={hospital}
        onChange={(e) => setHospital(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Dentist Address"
        variant="outlined"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Dentist Expertist"
        variant="outlined"
        value={expertist}
        onChange={(e) => setExpertist(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Dentist Phone"
        variant="outlined"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Dentist Image URL"
        variant="outlined"
        value={picture}
        onChange={(e) => setPicture(e.target.value)}
      />

      <button
        type="submit"
        className="rounded-md bg-gray-200 px-3 py-2 m-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300"
        onClick={handleUpdateDentsit}
      >
        Submit Update Dentist
      </button>
    </main>
  );
}
