import React from "react";

function VideoCard({channel, description, likes, link, title}) {
  console.log(title)
  console.log('hey')
  return (
  <div className="card">
    <h3>{title}</h3>
    <iframe
      width="200"
      height="200"
      src='https://www.youtube.com/embed/tDQw21ntR64'
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    //  description={description}
    />
  </div>
  )
}

export default VideoCard;
