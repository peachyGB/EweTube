import React from "react";
import Home from "./Home";
import Favorites from "./Favorites";
import UploadForm from "./UploadForm";

function NavBar() {
  return (
    <h4>
      <Home />
      <Favorites />
      <UploadForm />
    </h4>
  );
}

export default NavBar;
