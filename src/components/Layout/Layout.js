import React from "react";
import Container from "../Container";
import AppBar from "../AppBar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <div className={styles.bgWrapper}>
        <AppBar />
      </div>
      <Container>{children}</Container>
    </>
  );
};

export default Layout;
