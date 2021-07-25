import React from "react";
import styles from "../MoviesList.module.css";

const MoviesItem = ({ image, name, year, id, onClick }) => {
  return (
    <li className={styles.listItem} onClick={onClick} id={id}>
      <div className={styles.imageBox}>
        <img src={image} alt={name} />
      </div>
      <p className={styles.title}>{name}</p>
      <p className={styles.postTitle}>{year}</p>
    </li>
  );
};

export default MoviesItem;
