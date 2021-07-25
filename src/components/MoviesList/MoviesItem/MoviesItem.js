import React from "react";
import styles from "../MoviesList.module.css";

const MoviesItem = ({ image, name, year }) => {
  return (
    <li className={styles.listItem}>
      <div className={styles.imageBox}>
        <img src={image} alt={name} />
      </div>
      <p className={styles.title}>{name}</p>
      <p className={styles.postTitle}>{year}</p>
    </li>
  );
};

export default MoviesItem;
