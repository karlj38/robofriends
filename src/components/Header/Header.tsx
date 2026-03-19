"use client";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <Link className={styles.headerLink} href="/">
        <h1 className="f1 sega">RoboFriends</h1>
      </Link>
    </header>
  );
}
