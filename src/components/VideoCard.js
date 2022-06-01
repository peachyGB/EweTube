import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ id, likes, link, title }) {
  return (
      <div className="card">
        <Link className="title" style={{textDecoration: "none"}} to={`videos/${id}`}>
          <h6>{title}</h6>
        </Link>
        <Link className="videos" to={`videos/${id}`} style={{textDecoration: "none"}}>
          <iframe
            width="240"
            height="150"
            src={link}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            controls="0"
            modestbranding="1"
            loading="eager"
          />
        </Link>
        <div>
          <button 
            className="like-btn">🐑, 
          </button>
        </div>
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

