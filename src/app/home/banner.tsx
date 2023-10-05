"use client";
import { useState } from 'react';

import styles from './home.module.css';

export default function Banner() {
  const covers = [
    "/banner0.avif",
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
  ];
  const [index, setIndex] = useState(0);
  return (
    <div className={styles.banner_container}>
      <h4 className={styles.banner_text}>
        🌟 Your Health, Your Choice: Get Vaccinated Today! <br />
        🌟 Protect Yourself and Your Loved Ones – Get Vaccinated Now! <br />
        👉 Safe. Effective. Essential. 👈 <br />
        🔒 Defend Against COVID-19 – Vaccines Available! <br />
        🌍 Join the Fight: Vaccines for a Safer Tomorrow. <br />
        💉 Your Shot of Hope: Book Your Vaccination Today!
      </h4>
      <div onClick={() => setIndex((index + 1) % covers.length)}>
        <img src={covers[index]} className={styles.hospital_image} />
      </div>
    </div>
  );
}
