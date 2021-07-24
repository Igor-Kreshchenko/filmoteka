import React from "react";
import Navigation from "../Navigation";
import SearchForm from "../SearchForm";
import styles from "./AppBar.module.css";

const AppBar = () => {
  return (
    <header className={styles.header}>
      <Navigation />
      <SearchForm />
    </header>
  );
};

export default AppBar;
