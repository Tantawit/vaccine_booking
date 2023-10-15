import LinkButton from "./components/linkButton";
import { PromoteCard } from "./components/promoteCard";
import Banner from "./home/banner";
import VaccineInfo from "./home/vaccineInfo";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <PromoteCard vdoSrc="/vdo/getvaccine.mp4" />
      <Banner />
      <LinkButton Text="Select your own hospital" Path="/hospital" />
      <VaccineInfo />
    </div>
  );
}
