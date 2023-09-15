import Banner from "./home/banner";
import VaccineInfo from "./home/vaccineInfo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <Banner />
      <VaccineInfo />
    </div>
  );
}
