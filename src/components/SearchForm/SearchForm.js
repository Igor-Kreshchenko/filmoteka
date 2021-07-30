import React, { useState, useContext } from "react";
import MoviesContext from "../../store/movies-context";
import styles from "./SearchForm.module.css";

const SearchForm = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const moviesContext = useContext(MoviesContext);
  const onChangeQuery = () => moviesContext.onChangeQuery(searchQuery);

  const handleChange = (e) => {
    const value = e.target.value;

    setSearchQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onChangeQuery();
    reset();
  };

  const reset = () => {
    setSearchQuery("");
  };

  return (
    <form type="submit" onSubmit={handleSubmit}>
      <label className={styles.label}>
        <input
          className={styles.searchInput}
          placeholder="Search movies"
          type="text"
          onChange={handleChange}
          value={searchQuery}
        />
      </label>
    </form>
  );
};

export default SearchForm;
