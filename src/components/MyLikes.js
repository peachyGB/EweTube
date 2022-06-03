import React from "react";
import VideoCard from "./VideoCard";

function MyLikes({ onVidDislike, likedList, onVidLike }) {
  let postLikes = likedList.map((video) => (
    <VideoCard
      key={video.id}
      id={video.id}
      channel={video.channel}
      description={video.description}
      likeCount={video.likeCount}
      liked={video.liked}
      link={video.link}
      title={video.title}
      onVidDislike={onVidDislike}
      onVidLike={onVidLike}
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
