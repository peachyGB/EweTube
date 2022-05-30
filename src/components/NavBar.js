// Link to Home Child Component
// Link to Upload Video Form Component
// Link to Favorites Component

import React from "react"
import Home from "./Home"
import UploadForm from "./UploadForm"
import Favorites from "./Favorites"
import {NavLink} from "react-router-dom"

// Can put styling directly into the component like this so that all NavBar links are controlled here. 
const linkStyles = {
  display: 'inline-block',
  width: '50px',
  padding: '12px', 
  margin: '0 6px 6 px',
  backgroundf: 'blue',
  textDecoration: 'none',
  color: 'white'
}

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/UploadForm"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Upload Form
      </NavLink>
      <NavLink
        to="Favorites"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Favorites
      </NavLink>
    </div>
  )
}

export default NavBar