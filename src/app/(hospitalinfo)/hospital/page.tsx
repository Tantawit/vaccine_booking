import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddHospitalForm from "@/components/AddHospitalForm";
import HospitalCatalog from "@/components/HospitalCatalog";
import { hospitals } from "@/config/hospitals";
import getHospitals from "@/libs/getHospital";
import userProfile from "@/libs/getUserProfile";

import styles from "./page.module.css";

export default async function HospitalPage() {
  const hospitals = getHospitals();

  let profile = null;
  const session = await getServerSession(authOptions);
  if (session && session.user.token) {
    profile = await userProfile(session.user.token);
  }

  return (
    <div className={styles.main}>
      <HospitalCatalog hospitalJson={hospitals} />
      {profile && profile.data.role == "admin" ? <AddHospitalForm /> : null}
    </div>
  );
}
