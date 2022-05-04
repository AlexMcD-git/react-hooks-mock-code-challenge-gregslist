import React from "react";
import Search from "./Search";

function Header({searchContent, updateSearchContent, sortByLocation}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchContent={searchContent} updateSearchContent={updateSearchContent}/>
      <button onClick={sortByLocation}>Sort By Location</button>
    </header>
  );
}

export default Header;
