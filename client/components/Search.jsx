import React from "react";

const Search = (props) => {
  return (
    <div id="Search">
      <input
        type="text"
        id="search-input"
        placeholder="What's your question?"
      />
      <button id="search-btn">Search</button>
    </div>
  );
};

export default Search;
