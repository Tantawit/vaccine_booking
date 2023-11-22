"use client";
import React from "react";

import { BACKEND_URL } from "@/config/env";
import { TextField } from "@mui/material";

export default function SignupForm() {
  const [name, setName] = React.useState<string>("");
  const [tel, setTel] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  const handleSignUp = async () => {
    if (name && tel && email && password) {
      try {
        const response = await fetch(BACKEND_URL + "/api/v1/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            tel: tel,
            email: email,
            password: password,
            role: "user",
          }),
        });

        if (response.ok) {
          alert("User signed up successfully!");
        } else {
          alert("Failed to sign up");
        }
      } catch (error) {
        console.error("Error during sign up:", error);
      }
    } else alert("Some Field Missing");
  };

  return (
    <main className="w-[100%] flex flex-col items-center space-y-4 mt-[100px]">
      <div className="text-xl font-medium">Sign-Up</div>

      <TextField
        id="outlined-basic"
        label="Fullname"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Phone Number"
        variant="outlined"
        onChange={(e) => setTel(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        type="submit"
        className="rounded-md bg-gray-200 px-3 py-2 m-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-300"
        onClick={handleSignUp}
      >
        Submit Sign Up
      </button>
    </main>
  );
}
