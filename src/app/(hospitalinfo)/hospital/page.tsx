import HospitalCard from '../../components/HospitalCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
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
