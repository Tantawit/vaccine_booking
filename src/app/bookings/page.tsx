import Navbar from '../components/navbar';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.contentContainer}>
        <HospitalCard
          HospitalName="Chulalongkorn Hospital"
          HospitalImagePath="/chula_hos.jpg"
        />
        <HospitalCard
          HospitalName="Rajavithi Hospital"
          HospitalImagePath="/raj_hos.jpg"
        />
        <HospitalCard
          HospitalName="Thammasat University Hospital"
          HospitalImagePath="/tham_hos.jpg"
        />
      </div>
    </div>
  );
}

function HospitalCard({
  HospitalName,
  HospitalImagePath,
}: {
  HospitalName: string;
  HospitalImagePath: string;
}) {
  return (
    <div className={styles.hospitalCard + " w-96 bg-white shadow rounded"}>
      {HospitalName}
      <img src={HospitalImagePath} className={styles.hospitalImage} />
    </div>
  );
}
