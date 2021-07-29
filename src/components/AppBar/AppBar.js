import React from "react";
import Navigation from "../Navigation";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <div className={styles.bgWrapper}>
      <header className={styles.header}>
        <Navigation />
      </header>
    </div>
  );
};

export default AppBar;
