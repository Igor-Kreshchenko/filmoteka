import React from "react";

const MoviesItem = ({ image, title, genre, year }) => {
  return (
    <li>
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{genre | year}</p>
    </li>
  );
};

export default MoviesItem;
