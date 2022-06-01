import React from "react";
import { Link } from "react-router-dom";

function VideoCard({ likes, link, title, id }) {
  return (
    <div className="card">
<<<<<<< HEAD
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
=======
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
>>>>>>> d2f899d91788e1b786c3d605dccb2f574db9418b
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
