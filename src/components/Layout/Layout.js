import React from "react";
import Container from "../Container";
import AppBar from "../AppBar";
import Footer from "../Footer";
import styles from "./Layout.module.css";

const Layout = ({ onChangeQuery, children }) => {
  return (
    <>
      <div className={styles.bgWrapper}>
        <AppBar onChangeQuery={onChangeQuery} />
      </div>
      <Container>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
