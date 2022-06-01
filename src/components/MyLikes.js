import React from "react";
import VideoCard from "./VideoCard";

function MyLikes({ likedList }) {
  let postLikes = likedList.map((video) => (
    <VideoCard
      key={video.id}
      id={video.id}
      channel={video.channel}
      description={video.description}
      likes={video.likes}
      link={video.link}
      title={video.title}
    />
  ));
  return (
    <div>
      <h2>My Likes</h2>
      <div> {postLikes} </div>
    </div>
  );
}

export default MyLikes;

// create state for likedList (empty array)-- who gets this? need video

// onClick for sheep button that adds liked sheep to likedList, changes to button to unlike option

//send liked list to MyLikes page map it out to render

// add video to liked list
