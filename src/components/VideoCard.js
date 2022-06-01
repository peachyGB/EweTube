import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ likes, link, title, id }) {
  return (
    <div className="card">
      <Link to={`videos/${id}`}>
        <h3>{title}</h3>
      </Link>
      <Link to={`videos/${id}`}>
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
      </Link>
      <button className="like-btn">🐑</button>
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
