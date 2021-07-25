import React from "react";
import Navigation from "../Navigation";
import SearchForm from "../SearchForm";
import styles from "./AppBar.module.css";

const AppBar = ({ onChangeQuery }) => {
  return (
    <header className={styles.header}>
      <Navigation />
      <SearchForm onChangeQuery={onChangeQuery} />
    </header>
  );
};

export default AppBar;
