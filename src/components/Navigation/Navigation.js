import React from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";
import Logo from "../Logo";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to={routes.home}>
            Home
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to={routes.library}>
            My library
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to={routes.register}>
            Sign Up
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link className={styles.navLink} to={routes.logIn}>
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
