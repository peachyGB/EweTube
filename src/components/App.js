// Parent Component

// import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import UploadForm from "./UploadForm";
import MyLikes from "./MyLikes";
import NavBar from "./NavBar";
import VideoPage from "./VideoPage";

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
      <header className="App-header"></header>
      <Header search={search} onNewSearch={setSearch} />
      <NavBar />
      <Switch>
        <Route path="/upload">
          <UploadForm postVideo={postVideo} />
        </Route>

        <Route path="/mylikes">
          <MyLikes />
        </Route>

        <Route path="/videos/:id">
          <VideoPage />
        </Route>

        <Route exact path="/">
          <Home videos={displayVideo} />
        </Route>
        <Route path="*">
          <h2>ERROR: You found a baaad link</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
