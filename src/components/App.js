// Parent Component

// import "./App.css";
import React, {useState, useEffect} from "react"
import Header from "./Header"
import Search from "./Search"
import NavBar from "./NavBar"
// import {Route, Switch} from "react-router-dom"
import Home from "./Home"

function App() {
  const [videos, setVideos] = useState([])
  console.log('hello again')
  useEffect(() => {
    fetch('http://localhost:7001/videos')
    .then(response => response.json())
    .then((videos) => setVideos(videos))
  }, [])

  return (
    <div className="App">
      <header className="App-header" >eweTube</header>
      <NavBar />
      <Home videos={videos} />
      {/* <Switch>
        <Route path="/Header" >
          <Header />
        </Route>code 
        <Route path="/Search" >
          <Search />
        </Route>
        <Route path="/Home" >
          <Home videos={videos} />
        </Route> */}
      {/* </Switch> */}

    </div>
  );
}

export default App;
