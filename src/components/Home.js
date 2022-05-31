// Contains Rendered Videos
// When video clicked open individual Player Tile

import React from "react";
import VideoCard from "./VideoCard"

function Home({videos}) {
  console.log('hi')
  const postVideos = videos.map((video) => 
    <VideoCard 
      key={video.id}
      id={video.id}
      channel={video.channel}
      description={video.description}
      likes={video.likes}
      link={video.link}
      title={video.title}
      videos={videos}
      />
  )
  console.log(postVideos)

  return (
  <div>
    {postVideos}
  </div>
  )
}

export default Home;
