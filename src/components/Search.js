import React from "react";

const Search = ({ query, setQuery, fetchImages }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();

    setQuery(query);
    fetchImages();
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={onFormSubmit}>
        <input
          className="search__form__field"
          type="text"
          value={query}
          placeholder="Image search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="search__form__button">Search</button>
      </form>
    </div>
  );
};

export default Search;
