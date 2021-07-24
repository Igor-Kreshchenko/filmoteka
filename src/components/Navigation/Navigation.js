import React from "react";
import Logo from "../Logo";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <ul className={styles.navList}>
        <li className={styles.navItem}>Home</li>
        <li className={styles.navItem}>My library</li>
      </ul>
    </nav>
  );
};

export default Navigation;
