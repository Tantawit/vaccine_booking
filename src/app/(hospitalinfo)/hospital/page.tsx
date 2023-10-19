import HospitalCatalog from "@/components/HospitalCatalog";
import { hospitals } from "@/config/hospitals";
import getHospitals from "@/libs/getHospital";

import styles from "./page.module.css";

export default function Home() {
  const hospitals = getHospitals();
  return (
    <div className={styles.main}>
      <HospitalCatalog hospitalJson={hospitals} />
    </div>
  );
}
