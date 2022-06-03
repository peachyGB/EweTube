import React, { useState } from "react"; 
import validator from "validator"

function UploadForm({ postVideo }) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [checked, setChecked] = useState(true);
  const [valid, setValid] = useState(false)

  let ready = (valid && !checked)

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
      setTitle("")
      setLink("")
      setDescription("")
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
     if (validator.isURL(e.target.value)) {
      setValid(true)
      console.log('hi')
    }
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
        <button disabled={!ready}>Submit</button>
      </form>
    </div>
  );
}

export default UploadForm;

// https://www.youtube.com/embed/5XWEVoI40sE
