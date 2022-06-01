import React from "react";
import { Link } from "react-router-dom";
import Search from './Search'

function NavBar({ search, onNewSearch }) {
  return (
    <div class="navbar navbar navbar-light">
      <div class="container-fluid">
            <img
              className="logo"
              width="250"
              alt="EweTube Logo"
              src="https://user-images.githubusercontent.com/102488171/171423652-eed342aa-236c-4e11-a6af-9785c6e4654d.png"
            />
              <div className='search-bar'>
                <Search search={search} onNewSearch={onNewSearch} />
              </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
            <div class="navbar-nav me-auto">
            <div class="nav-item">
                <Link exact to="/"  class="nav-link"> Home </Link>
                <Link to="/upload" class="nav-link"> Upload Video </Link>
                <Link to="/mylikes" class="nav-link"> My Likes </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
