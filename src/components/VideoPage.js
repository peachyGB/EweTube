import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function VideoPage() {
  const [vidPage, setVidPage] = useState(null);

  const params = useParams();
  console.log(params);
  console.log(params.id);
  useEffect(() => {
    fetch(`http://localhost:7001/videos/${params.id}`)
      .then((r) => r.json())
      .then((data) => setVidPage(data));
  }, [params.id]);

  if (!vidPage)
    return (
      <h2>
        Loading: establishing relation<i>sheep</i> with server…
      </h2>
    );

  const { title, link, description, channel, likes, comments } = vidPage;
  return (
    <div className="video-page ">
      <iframe
        width="960"
        height="540"
        src={link}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        controls="0"
        modestbranding="1"
        loading="eager"
      />
      <div class="d-flex flex-column">
      <div  class="p-2 ">
      <h2>{title}</h2>
      <h4>Channel: <a href={channel} target="_blank">{channel}</a></h4>
      {/* <div>Likes: {likes}</div> */}
      <br />
      <p>{description}</p>
      {/* <h4>Comments:</h4>
      <div>{comments}</div> */}
      </div>
      </div>
    </div>
  );
}

export default VideoPage;
