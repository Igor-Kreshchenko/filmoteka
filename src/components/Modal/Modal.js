import React, { useEffect, useContext, useCallback } from "react";
import { createPortal } from "react-dom";
import Button from "../Button";
import MoviesContext from "../../store/movies-context";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = () => {
  const moviesContext = useContext(MoviesContext);
  const movie = moviesContext.movie;
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    overview,
  } = movie;

  const onClose = useCallback(
    () => moviesContext.onCloseModal(),
    [moviesContext]
  );

  useEffect(() => {
    const handleKeydown = ({ code }) => {
      if (code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  const handleAddBtnClick = (e) => {
    const type = e.currentTarget.name;

    fetch(`https://filmoteka-43b8d-default-rtdb.firebaseio.com/${type}.json`, {
      method: "POST",
      body: JSON.stringify(movie),
      headers: {
        "Content-Type": "application/json",
      },
    });

    onClose();
  };

  const handleCloseButtonClick = () => {
    onClose();
  };

  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return createPortal(
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={handleCloseButtonClick}
        >
          <svg
            className={styles.closeIcon}
            width="30"
            height="30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 8l14 14M8 22L22 8" stroke="#000" strokeWidth="2" />
          </svg>
        </button>

        <div className={styles.imageBox}>
          <img className={styles.modalImg} src={posterUrl} alt={title} />
        </div>
        <div className={styles.modalContent}>
          <h2 className={styles.modalTitle}>{title}</h2>

          <ul className={styles.featureList}>
            <li className={styles.feature}>
              <span className={styles.featureName}>Vote / Votes</span>
              <div>
                <span className={styles.rate}>{vote_average}</span>
                {` / ${vote_count}`}
              </div>
            </li>
            <li className={styles.feature}>
              <span className={styles.featureName}>Popularity</span>
              {parseInt(popularity)}
            </li>
            <li className={styles.feature}>
              <span className={styles.featureName}>Original Title</span>
              {original_title}
            </li>
            <li className={styles.feature}>
              <span className={styles.featureName}>Genre</span>
            </li>
          </ul>

          <h3 className={styles.aboutTitle}>About</h3>
          <p className={styles.description}>{overview}</p>

          <div className={styles.buttonsBox}>
            <Button
              onClick={handleAddBtnClick}
              name={"watched"}
              text={"add to Watched"}
            />
            <Button
              onClick={handleAddBtnClick}
              name={"queue"}
              text={"add to queue"}
            />
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
