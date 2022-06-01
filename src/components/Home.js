// Contains Rendered Videos
// When video clicked open individual Player Tile

import React from "react";
import VideoCard from "./VideoCard";

function Home({ videos, onVideoLike }) {
  const postVideos = videos.map((video) => (
    <VideoCard
      key={video.id}
      id={video.id}
      channel={video.channel}
      description={video.description}
      likeCount={video.likeCount}
      liked={video.liked}
      link={video.link}
      title={video.title}
      video={video}
      onVideoLike={onVideoLike}
    />
  ));

  return <div>{postVideos}</div>;
}

export default Home;
