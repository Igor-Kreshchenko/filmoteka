import React from "react";
import Button from "../../components/Button";
import Section from "../../components/Section";
import MoviesList from "../../components/MoviesList";
import styles from "./LibraryPage.module.css";

const LibraryPage = () => {
  return (
    <div>
      <div className={styles.buttonsBox}>
        <Button
          variant="outlined"
          color="primary"
          text={"Watched"}
          name={"Watched"}
        />

        <Button
          variant="outlined"
          color="primary"
          text={"Queue"}
          name={"Queue"}
        />
      </div>

      <Section>
        {/* <MoviesList movies={movies} onClick={onOpenModal} /> */}
      </Section>
    </div>
  );
};

export default LibraryPage;
