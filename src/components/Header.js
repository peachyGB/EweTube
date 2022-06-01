import React from "react";
import Search from "./Search";

function Header({ search, onNewSearch }) {
  return (
    <div className='header'>
      <img
        className="logo"
        width="200"
        alt="EweTube Logo"
        src="https://user-images.githubusercontent.com/102488171/171423652-eed342aa-236c-4e11-a6af-9785c6e4654d.png"
      ></img>

      <Search search={search} onNewSearch={onNewSearch} />
    </div>
  );
}

export default Header;
