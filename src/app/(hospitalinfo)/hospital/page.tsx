import { hospitals } from '@/app/config/hospitals';

import HospitalCard from '../../components/HospitalCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.contentContainer}>
        {hospitals.map((hospital) => (
          <HospitalCard
            HospitalName={hospital.hospitalName}
            HospitalImagePath={hospital.hospitalImagePath}
            HospitalId={hospital.hospitalId}
          />
        ))}
      </div>
    </div>
  );
}
