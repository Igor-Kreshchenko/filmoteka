import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>
        &#169; 2021 | All Rights Reserved | Developed by{" "}
        <a
          href="https://github.com/Igor-Kreshchenko"
          target="_blank"
          rel="noopener noreferrer"
        >
          Igor Kreshchenko
        </a>
      </p>
    </footer>
  );
};

export default Footer;
