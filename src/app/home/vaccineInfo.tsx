import styles from "./home.module.css";

export default function VaccineInfo() {
  return (
    <div>
      <h2 className={styles.vaccine_info_title}>
        <br />
        <br />
        <div className="text-4xl font-medium">What is Vaccine?</div>
      </h2>
      <div className={styles.vaccine_info_container}>
        <img src="/vaccine.avif" className={styles.hospital_image} />
        <h4 className={styles.banner_text}>
          A vaccine is a crucial tool in modern medicine designed to bolster the
          body's immune system against specific diseases. It contains harmless
          pieces of the disease-causing microorganism or a weakened/deactivated
          version of the pathogen itself. When introduced into the body, the
          vaccine stimulates the immune system to produce a defense response,
          including the creation of antibodies. These antibodies "remember" the
          disease, enabling the immune system to swiftly counteract it if
          encountered in the future. Vaccines have played a monumental role in
          preventing and controlling a wide array of illnesses, safeguarding
          individual health and contributing to the broader community's immunity
          against contagious diseases
        </h4>
      </div>
    </div>
  );
}
