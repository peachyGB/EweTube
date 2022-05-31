// Parent Component

// import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./Header";

// import {Route, Switch} from "react-router-dom"

function App() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:7001/videos")
      .then((response) => response.json())
      .then((videos) => setVideos(videos));
  }, []);

  const displayVideo = videos.filter((video) => {
    return video.title.toLowerCase().includes(search.toLowerCase());
  });

  function postVideo(newVideo) {
    setVideos([...videos, newVideo]);
  }

  return (
    <div className="App">
      <header className="App-header">eweTube</header>
      <Header
        search={search}
        onNewSearch={setSearch}
        videos={displayVideo}
        postVideo={postVideo}
      />
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
