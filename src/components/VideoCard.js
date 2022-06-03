import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function VideoCard({
  id,
  link,
  title,
  liked,
  likeCount,
  onVidDislike,
  onVidLike,
}) {
  const [isLiked, setIsLiked] = useState(liked);
  const [newLikes, setNewLikes] = useState(likeCount);
  const [confusion, setConfusion] = useState(false);

  //LIKE BUTTON
  function handleVidLike() {
    setIsLiked(!isLiked);
    setNewLikes(newLikes + 1);
    setConfusion(!confusion);

    fetch(`http://localhost:7001/videos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ liked: isLiked, likeCount: newLikes }),
    })
      .then((response) => response.json())
      .then((data) => onVidLike(data));
    //.then((data) => console.log(data));
  }
  // useEffect(() => {
  //   fetch(`http://localhost:7001/videos/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ liked: isLiked, likeCount: newLikes }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => (isLiked ? onVidDislike(data) : onVidLike(data)));
  //   //.then((data) => console.log(data));
  // }, []);

  function handleVidDislike() {
    setIsLiked(!isLiked);
    setNewLikes(newLikes - 1);
    setConfusion(!confusion);

    fetch(`http://localhost:7001/videos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ liked: isLiked, likeCount: newLikes }),
    })
      .then((response) => response.json())
      .then((data) => onVidDislike(data));
    //.then((data) => console.log(data));
  }

  return (
    <div className="card">
      <Link
        className="title"
        style={{ textDecoration: "none" }}
        to={`videos/${id}`}
      >
        <h6>{title}</h6>
      </Link>
      <Link
        className="videos"
        to={`videos/${id}`}
        style={{ textDecoration: "none" }}
      >
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
        <div>Likes: </div>
        {isLiked ? (
          <button className="un-like-btn" onClick={handleVidDislike}>
            🐑
          </button>
        ) : (
          <button className="like-btn" onClick={handleVidLike}>
            🐑
          </button>
        )}
        <div>{newLikes}</div>
      </div>
    </div>
  );
}

export default VideoCard;
