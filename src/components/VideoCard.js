import React from "react";

function VideoCard({ channel, description, likes, link, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <iframe
        width="240"
        height="135"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        controls="0"
        modestbranding="1"
        loading="eager"
      />

      <button 
        width='40'
        height='40'
        className="like-btn">🐑</button>
    </div>
  );
}

export default VideoCard;

{
  /* <iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/Drmj1RfD3JY"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>; */
}
