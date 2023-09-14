import Link from 'next/link';

import styles from './component.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbar_title}>Vaccine-Man</h1>
      <div className={styles.navitems_container}>
        <NavItem itemName="Booking" itemLink="/bookings" />
        <Link href="/">
          <img src="/logo.png" className={styles.logo} />
        </Link>
      </div>
    </div>
  );
}

function NavItem({
  itemName,
  itemLink,
}: {
  itemName: string;
  itemLink: string;
}) {
  return (
    <Link className={styles.navitems} href={itemLink}>
      {itemName}
    </Link>
  );
}
