import React, { useState } from "react";

function Search({searchContent, updateSearchContent}) {
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchContent}
        onChange={(e) => updateSearchContent(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
