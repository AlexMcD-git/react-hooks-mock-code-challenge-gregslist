import React from "react";
import Search from "./Search";

function Header({searchContent, updateSearchContent}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search searchContent={searchContent} updateSearchContent={updateSearchContent}/>
    </header>
  );
}

export default Header;
