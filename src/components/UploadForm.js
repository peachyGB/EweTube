import React, { useState } from "react";

function UploadForm({ postVideo }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [checked, setChecked] = useState(true);

  function handleChange() {
    setChecked(!checked);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newVideo = { title, link, description };
    handlePost(newVideo);
  }

  function handlePost(newVideo) {
    fetch("http://localhost:7001/videos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newVideo),
    })
      .then((r) => r.json())
      .then((data) => postVideo(data));
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  return (
    <div>
      <h3>Add a Video!</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label className='label'><strong>Title</strong></label>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />  
        <label className='label'><strong>Link</strong></label>
        <input
          type="link"
          placeholder="Link"
          name="link"
          value={link}
          onChange={handleLinkChange}
        />
        <label className='label'><strong>Description</strong></label>
        <input
          type="text"
          placeholder="description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        /> 
        <input className='label' type="checkbox" onChange={handleChange}></input>
        <label >
          I attest that this video is ewe related content and understand that
          falsely identifying unrelated content as ewe related is a violation of
          our terms and conditions and is punishable in a court of baa.
        </label>
        <button disabled={checked}>Submit</button>
      </form>
    </div>
  );
}

export default UploadForm;
