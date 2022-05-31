// Parent Component

import "./App.css";
import React from "react"
import Header from "./Header"
import Search from "./Search"
import NavBar from "./NavBar"
import {Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header" >eweTube</header>
      <NavBar />
      <Switch>
        <Route path="/Header" >
          <Header />
        </Route>code 
        <Route path="Search" >
          <Search />
        </Route>
        <Route path="NavBar" >
          <NavBar />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
