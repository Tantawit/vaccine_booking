"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";

import styles from "./home.module.css";

export default function Banner() {
  const covers = [
    "/smiling-girl1.jpg",
    "/smiling-girl2.jpg",
    "/smiling-girl3.jpg",
    "/smiling-girl4.jpg",
  ];
  const [index, setIndex] = useState(0);
  const { data: session } = useSession();

  return (
    <div className={styles.banner_container}>
      <h4 className={styles.banner_text}>
        🌟 Your Smile, Your Choice: Get Dentisted Today! <br />
        🌟 Protect your teeth and Your Loved Ones teeth – Get Healthy Teeth Now!
        <br />
        👉 Safe. Effective. Essential. 👈 <br />
        🔒 Defend Against COVID-19 – Dentist Available! <br />
        🌍 Join the Fight: Healthy Teeth for a Safer Tomorrow. <br />
        💉 Your Shot of Hope: Book Your Dentist Today!
      </h4>
      <div
        className="relative"
        onClick={() => setIndex((index + 1) % covers.length)}
      >
        {session ? (
          <div className="absolute top[-[10px] right-[10px]">
            {`Hello, ${session.user?.name}`}{" "}
          </div>
        ) : null}

        <img src={covers[index]} className={styles.hospital_image} />
      </div>
    </div>
  );
}
