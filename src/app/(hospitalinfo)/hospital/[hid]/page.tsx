import getHospitals from "@/libs/getHospital";

import HospitalCard from "../../../../components/HospitalCard";
import styles from "./page.module.css";

export default async function HospitalDetail({
  params,
}: {
  params: { hid: string };
}) {
  const hospitalJsonReady = await getHospitals();
  return (
    <div className={styles.main}>
      <div className="flex flex-row flex-wrap justify-around m-[20px]">
        {hospitalJsonReady.data.map((hospitalItem: Object) =>
          hospitalItem.id == params.hid ? (
            <HospitalCard
              HospitalName={hospitalItem.name}
              HospitalImagePath={hospitalItem.picture}
              HospitalId={hospitalItem.id}
            />
          ) : null
        )}
      </div>
    </div>
  );
}
