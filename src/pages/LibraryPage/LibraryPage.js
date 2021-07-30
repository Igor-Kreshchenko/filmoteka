import React, { useState, useEffect } from "react";
import Button from "../../components/Button";
import Section from "../../components/Section";
import MoviesList from "../../components/MoviesList";
import styles from "./LibraryPage.module.css";

const LibraryPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [moviesType, setMoviesType] = useState("watched");

  useEffect(() => {
    setIsLoading(true);

    fetch(
      `https://filmoteka-43b8d-default-rtdb.firebaseio.com/${moviesType}.json`
    )
      .then((response) => response.json())
      .then((data) => {
        const movies = [];
        for (let key in data) {
          const movie = {
            id: key,
            ...data[key],
          };

          movies.push(movie);
        }

        setIsLoading(false);
        setMovies(movies);
      });
  }, [moviesType]);

  if (isLoading) {
    return (
      <section>
        <h2>Loading...</h2>
      </section>
    );
  }

  const toggleMoviesPage = (e) => {
    const btnName = e.currentTarget.name;

    btnName === "watched" ? setMoviesType("watched") : setMoviesType("queue");
  };

  return (
    <div>
      <div className={styles.buttonsBox}>
        <Button
          variant="outlined"
          color="primary"
          text={"watched"}
          name={"watched"}
          onClick={toggleMoviesPage}
        />

        <Button
          variant="outlined"
          color="primary"
          text={"queue"}
          name={"queue"}
          onClick={toggleMoviesPage}
        />
      </div>

      <Section>
        <MoviesList movies={movies} /*onClick={onOpenModal}*/ />
      </Section>
    </div>
  );
};

export default LibraryPage;
