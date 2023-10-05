import { hospitals } from '@/app/config/hospitals';

import HospitalCard from '../../../components/HospitalCard';
import styles from './page.module.css';

export default function HospitalDetail({
  params,
}: {
  params: { hid: string };
}) {
  return (
    <div className={styles.main}>
      <div className={styles.contentContainer}>
        {hospitals.map((hospital) =>
          hospital.hospitalId == params.hid ? (
            <HospitalCard
              HospitalName={hospital.hospitalName}
              HospitalImagePath={hospital.hospitalImagePath}
              HospitalId={hospital.hospitalId}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
