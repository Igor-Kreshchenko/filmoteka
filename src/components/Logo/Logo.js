import React, { Component } from "react";
import styles from "./Logo.module.css";

class Logo extends Component {
  state = {
    isTextShown: false,
  };

  componentDidMount() {
    const width = window.innerWidth;

    if (width >= 768) {
      this.showText();
    }
  }

  showText = () => {
    this.setState({
      isTextShown: true,
    });
  };

  render() {
    const { isTextShown } = this.state;

    return (
      <>
        <svg
          className={styles.logo}
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.82 2H4.18A2.18 2.18 0 002 4.18v15.64A2.18 2.18 0 004.18 22h15.64A2.18 2.18 0 0022 19.82V4.18A2.18 2.18 0 0019.82 2zM7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5"
            stroke="#818181"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {isTextShown && <h1 className={styles.logoText}>Filmoteka</h1>}
      </>
    );
  }
}

export default Logo;
