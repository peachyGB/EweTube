import React from "react";
import { Link } from "react-router-dom";
import Search from './Search'

function NavBar({ search, onNewSearch }) {
  return (
    <div class="navbar navbar navbar-light">
      <div class="container-fluid">
          <Link exact to="/"  class="nav-link">
            <img
              className="logo"
              width="250"
              alt="EweTube Logo"
              src="https://user-images.githubusercontent.com/102488171/171423652-eed342aa-236c-4e11-a6af-9785c6e4654d.png"
            />
            </Link>
              <div className='search-bar'>
                <Search search={search} onNewSearch={onNewSearch} />
              </div>
            <button id="toggler" class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span class="navbar-toggler-icon"></span>
            </button>
              <div class="collapse navbar-collapse" id="mynavbar">
              <div class="navbar-nav me-auto">
              <div id="nav-items" class="nav-item d-lg-flex align-items-center media-object pull-left">
                <Link exact to="/"  class="nav-link text-light btn-block col-sm-4 btn btn-danger option-button btn-outline-dark" id="nav-link"><strong>Home</strong> </Link>
                <Link to="/upload" class="nav-link text-light btn-block col-sm-4 btn btn-danger option-button btn-outline-dark" id="nav-link"> <strong>Upload Video</strong> </Link>
                <Link to="/mylikes" class="nav-link text-light btn-block col-sm-4 btn btn-danger option-button btn-outline-dark" id="nav-link"> <strong>My Likes</strong> </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
