import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BookingForm from "@/components/BookingForm";
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
  const token = session.user.token;

  const dentistJsonReady = await dentist;
  // profile && profile.data.role == "admin" ?
  return (
    <div className={styles.main}>
      <BookingForm token={token} dentists={dentistJsonReady} />{" "}
    </div>
  );
}
