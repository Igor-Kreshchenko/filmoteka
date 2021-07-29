import React from "react";
import defaultPoster from "../../images/default-poster.png";
import MoviesItem from "./MoviesItem";

import styles from "./MoviesList.module.css";

const MoviesList = ({ movies, onClick }) => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(({ poster_path, title, original_name, release_date, id }) => {
        const posterUrl = poster_path
          ? `https://image.tmdb.org/t/p/w500${poster_path}`
          : defaultPoster;
        const name = title ? title : original_name;
        const release = release_date
          ? release_date.slice(0, 4)
          : "Release date unknown";

        return (
          <MoviesItem
            key={id}
            id={id}
            image={posterUrl}
            name={name}
            year={release}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;
