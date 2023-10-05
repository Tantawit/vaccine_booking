import Link from 'next/link';

import { navItems } from '../config/navItems';
import styles from './component.module.css';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbar_title + " text-xl font-mono"}>
        Vaccine-Man
      </h1>
      <div className={styles.navitems_container}>
        {navItems.map((navItem) => (
          <NavItem itemName={navItem.name} itemLink={navItem.link} />
        ))}
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
    <Link className={styles.navitems + " font-mono mx-2"} href={itemLink}>
      {itemName}
    </Link>
  );
}
