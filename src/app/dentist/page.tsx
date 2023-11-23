import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddDentistForm from "@/components/AddDentistForm";
import DeleteDentistForm from "@/components/DeleteDentistForm";
import DentistCatalog from "@/components/DentistCatalog";
import UpdateDentistForm from "@/components/UpdateDentistForm";
import getDentist from "@/libs/getDentist";
import userProfile from "@/libs/getUserProfile";

import styles from "./page.module.css";

export default async function HospitalPage() {
  const dentist = getDentist();

  let profile = null;
  const session = await getServerSession(authOptions);
  if (session && session.user.token) {
    profile = await userProfile(session.user.token);
  }
  const token = session ? session.user.token : null;

  const dentistJsonReady = await dentist;

  return (
    <div className={styles.main}>
      <DentistCatalog dentistJson={dentist} />
      {profile && profile.data.role == "admin" ? (
        <>
          <AddDentistForm token={token} />{" "}
          <UpdateDentistForm dentists={dentistJsonReady} token={token} />
          <DeleteDentistForm dentists={dentistJsonReady} token={token} />
        </>
      ) : null}
    </div>
  );
}
