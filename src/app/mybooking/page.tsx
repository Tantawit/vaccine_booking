import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import BookingCatalog from "@/components/BookingCatalog";
import DeleteBookingForm from "@/components/DeleteBookingForm";
import UpdateBookingForm from "@/components/UpdateBookingForm";
import getBooking from "@/libs/getBooking";
import userProfile from "@/libs/getUserProfile";

import styles from "./page.module.css";

export default async function MyBookingPage() {
  let profile = null;
  const session = await getServerSession(authOptions);
  if (session && session.user.token) {
    profile = await userProfile(session.user.token);
  }
  const token = session.user.token;

  const bookings = getBooking(token);
  const bookingJsonReady = await bookings;

  return (
    <div className={styles.main}>
      <BookingCatalog bookings={bookingJsonReady} />
      <UpdateBookingForm bookings={bookingJsonReady} token={token} />
      <DeleteBookingForm bookings={bookingJsonReady} token={token} />
    </div>
  );
}
