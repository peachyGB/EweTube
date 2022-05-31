import React from "react";

function VideoCard({ channel, description, likes, link, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <iframe
        width="200"
        height="200"
        src="https://www.youtube.com/embed/tDQw21ntR64"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        //  description={description}
      />
      {/* <button className="like-btn" style="font-size:100px;">
        &#128017
      </button> */}
    </div>
  );
}

export default VideoCard;
