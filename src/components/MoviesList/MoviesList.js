import React from "react";
import MoviesItem from "./MoviesItem";
import { v4 as uuidv4 } from "uuid";
import styles from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(({ poster_path, title, original_name, release_date }) => {
        const id = uuidv4();
        const posterUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
        const name = title ? title : original_name;
        const release = release_date
          ? release_date.slice(0, 4)
          : "Release date unknown";

        return (
          <MoviesItem key={id} image={posterUrl} name={name} year={release} />
        );
      })}
    </ul>
  );
};

export default MoviesList;
