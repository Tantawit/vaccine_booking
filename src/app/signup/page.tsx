import styles from "./page.module.css";
import SignupForm from "./SignupForm";

export default async function Booking() {
  return (
    <div className={styles.main}>
      <div className={styles.contentContainer}>
        <SignupForm />
      </div>
    </div>
  );
}
