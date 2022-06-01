import React from "react";
import Search from "./Search";

function Header({ search, onNewSearch }) {
  return (
    <div>
      <img
        className="logo"
        width="100"
        alt="Screen Shot 2022-05-27 at 2 22 29 PM (1)"
        src="https://user-images.githubusercontent.com/102488171/171234003-914dba64-c172-421b-b637-43f43ea66150.jpg"
      ></img>

      <Search search={search} onNewSearch={onNewSearch} />
    </div>
  );
}

export default Header;
