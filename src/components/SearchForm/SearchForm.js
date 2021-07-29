import React, { useState } from "react";
import styles from "./SearchForm.module.css";

const SearchForm = ({ onChangeQuery }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;

    setSearchQuery(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onChangeQuery(searchQuery);
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
