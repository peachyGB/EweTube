import React, { useState } from "react";
import { Link } from "react-router-dom";

function VideoCard({ id, liked, likeCount, link, title, video, onVideoLike }) {
  const [isLiked, setIsLiked] = useState(false);

  function handleLike() {
    onVideoLike(video);
    setIsLiked(!isLiked);
  }

  return (
      <div className="card">
        <Link className="title" style={{textDecoration: "none"}} to={`videos/${id}`}>
          <h6>{title}</h6>
        </Link>
        <Link className="videos" to={`videos/${id}`} style={{textDecoration: "none"}}>
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

      <div>
        {/* <div>Likes: </div> */}
        <button
          className={isLiked ? "un-like-btn" : "like-btn"}
          onClick={handleLike}
        >
        🐑,
        </button>
        {/* <div>{likeCount}</div> */}
      </div>
    </div>
  );
}

export default VideoCard;


//likes button gets clicked:
//1. sheep flips
//1. if isliked ? newLikes -- : newLikes ++
//2. PATCH request to change likesCount to newLikes && and change liked to !liked
//3. server response replaces object in videos array (.map())
//4. state refreshes page to show new likes count
//5. render MyLikes with .filter(isliked:true)

