import React, { Component } from "react";
import styles from "./SearchForm.module.css";

class SearchForm extends Component {
  state = {
    searchQuery: "",
  };

  handleChange = (e) => {
    const value = e.target.value;

    this.setState({
      searchQuery: value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onChangeQuery } = this.props;
    const { searchQuery } = this.state;

    onChangeQuery(searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({
      searchQuery: "",
    });
  };

  render() {
    const { searchQuery } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <form type="submit" onSubmit={handleSubmit}>
        <label className={styles.label}>
          <input
            className={styles.searchInput}
            placeholder="Поиск фильмов"
            type="text"
            onChange={handleChange}
            value={searchQuery}
          />
        </label>
      </form>
    );
  }
}

export default SearchForm;
