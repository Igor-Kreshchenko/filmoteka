import React from "react";
import MoviesItem from "./MoviesItem";
import { v4 as uuidv4 } from "uuid";
import styles from "./MoviesList.module.css";

const movies = Array(20).fill({
  image:
    "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/608x608/products/88997/93196/Avengers-Endgame-Final-Style-Poster-buy-original-movie-posters-at-starstills__42370.1563973516.jpg?c=2",
  title: "Avengers",
  genre: "Fantasy",
  year: "2020",
});

const MoviesList = () => {
  return (
    <ul className={styles.moviesList}>
      {movies.map(({ image, title, genre, year }) => {
        const id = uuidv4();

        return (
          <MoviesItem
            key={id}
            image={image}
            title={title}
            genre={genre}
            year={year}
          />
        );
      })}
    </ul>
  );
};

export default MoviesList;
