import React from "react";
import Navigation from "../Navigation";
import SearchForm from "../SearchForm";
import styles from "./AppBar.module.css";

const AppBar = ({ onChangeQuery }) => {
  return (
    <div className={styles.bgWrapper}>
      <header className={styles.header}>
        <Navigation />
        <SearchForm onChangeQuery={onChangeQuery} />
      </header>
    </div>
  );
};

export default AppBar;
