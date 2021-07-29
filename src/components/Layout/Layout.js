import React from "react";
import Container from "../Container";
import Footer from "../Footer";
import AppBar from "../AppBar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.contentWrapper}>
        <AppBar />
        <Container>
          <main className={styles.main}>{children}</main>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
