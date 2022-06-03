import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import UploadForm from "./UploadForm";
import MyLikes from "./MyLikes";
import NavBar from "./NavBar";
import VideoPage from "./VideoPage";

function App() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [likedList, setLikedList] = useState([]);

  //fetches data from server on inital page load
  useEffect(() => {
    fetch("http://localhost:7001/videos")
      .then((response) => response.json())
      .then((videos) => setVideos(videos));
  }, []);

  //SEARCH
  const displayVideo = videos.filter((video) => {
    return video.title.toLowerCase().includes(search.toLowerCase());
  });

  //ADD NEW VIDEO
  function postVideo(newVideo) {
    setVideos([...videos, newVideo]);
  }

  //LIKE
  function onVidLike(newLikedVid) {
    console.log(newLikedVid);
    console.log(likedList);
    setLikedList([...likedList, newLikedVid]);
    console.log(likedList);
    // setVideos(
    //   videos.map((vid) => {
    //     if (vid.id === newLikedVid.id) {
    //       return newLikedVid;
    //     } else {
    //       return vid;
    //     }
    //   })
    // );
  }

  //UNLIKE
  function onVidDislike(unlikedVid) {
    setLikedList((videos) =>
      likedList.filter((video) => video.id !== unlikedVid.id)
    );
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <NavBar search={search} onNewSearch={setSearch} />
      <Switch>
        <Route path="/upload">
          <UploadForm postVideo={postVideo} />
        </Route>

        <Route path="/mylikes">
          <MyLikes
            onVidLike={onVidLike}
            onVidDislike={onVidDislike}
            likedList={likedList}
          />
        </Route>

        <Route path="/videos/:id">
          <VideoPage />
        </Route>

        <Route exact path="/">
          <Home
            videos={displayVideo}
            onVidLike={onVidLike}
            onVidDislike={onVidDislike}
          />
        </Route>
        <Route path="*">
          <h2>ERROR: You found a baaad link</h2>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
