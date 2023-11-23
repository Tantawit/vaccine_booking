import { getServerSession } from "next-auth";
import Link from "next/link";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

import { navItems, navItemsLogOut } from "../config/navItems";
import styles from "./component.module.css";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <div className={styles.navbar}>
      <div className="flex flex-row">
        <h1 className={styles.navbar_title + " text-xl font-mono mr-[20px]"}>
          Smile Bookings
        </h1>
        {session ? (
          <Link href="/api/auth/signout">Sign-Out of {session.user?.name}</Link>
        ) : (
          <>
            <Link href="/api/auth/signin" className="mx-[5px]">
              Sign-In
            </Link>
            <Link href="/signup" className="mx-[5px]">
              Sign-Up
            </Link>
          </>
        )}
      </div>
      <div className={styles.navitems_container}>
        {session
          ? navItems.map((navItem) => (
              <NavItem itemName={navItem.name} itemLink={navItem.link} />
            ))
          : navItemsLogOut.map((navItem) => (
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
