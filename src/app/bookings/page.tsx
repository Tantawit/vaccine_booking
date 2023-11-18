import { getServerSession } from "next-auth";

import getHospitals from "@/libs/getHospital";
import userProfile from "@/libs/getUserProfile";

import { authOptions } from "../api/auth/[...nextauth]/route";
import BookingForm from "./bookingForm";
import styles from "./page.module.css";

export default async function Booking() {
  const session = await getServerSession(authOptions);

  const hospitalJsonReady = await getHospitals();

  const profile = session?.user?.token
    ? await userProfile(session.user.token)
    : null;

  const profileData = profile?.data
    ? {
        name: profile.data.name,
        email: profile.data.email,
        tel: profile.data.tel,
        createAt: new Date(profile.data.createdAt).toString(),
      }
    : {};

  return (
    <div className={styles.main}>
      <div className={styles.contentContainer}>
        <BookingForm
          hospitalJsonReady={hospitalJsonReady}
          Profile={profileData}
        />
      </div>
    </div>
  );
}
