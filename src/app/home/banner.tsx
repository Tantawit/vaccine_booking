import styles from './home.module.css';

export default function Banner() {
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
      <img src="/hospital.avif" className={styles.hospital_image} />
    </div>
  );
}
