import Image from "next/image";

import styles from "./component.module.css";

export default function HospitalCard({
  HospitalName,
  HospitalImagePath,
}: {
  HospitalName: string;
  HospitalImagePath: string;
}) {
  return (
    <div className={styles.hospitalCard}>
      <div className={styles.hospitalText}>{HospitalName}</div>
      <div className={styles.hospitalImage}>
        <Image
          src={HospitalImagePath}
          alt="Hospital Image"
          fill={true}
          objectFit="cover"
        />
        fuck
      </div>
    </div>
  );
}
