"use client";
import React from "react";

import { BACKEND_URL } from "@/config/env";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";

export default function DeleteDentistForm({
  token,
  dentists,
}: {
  token: any;
  dentists: any;
}) {
  const [id, setId] = React.useState<string>("");

  const handleDeleteDentsit = async () => {
    if (id) {
      try {
        const response = await fetch(BACKEND_URL + "/api/v1/dentists/" + id, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        });

        if (response.ok) {
          alert("Delete dentist successfully!");
        } else {
          alert("Failed to delete dentist");
        }
      } catch (error) {
        console.error("Error during delete dentist:", error);
      }
    } else alert("Some Field Missing");
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[300px]">
      <div className="text-xl font-medium">Delete Dentist</div>
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

      <button
        type="submit"
        className="rounded-md bg-gray-200 px-3 py-2 m-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300"
        onClick={handleDeleteDentsit}
      >
        Submit Delete Dentist
      </button>
    </main>
  );
}
