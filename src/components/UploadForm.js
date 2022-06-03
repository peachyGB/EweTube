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
    const newVideo = { title, link, description, likeCount:0, liked:true };
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
      alert("Video Sucessfully Posted!")
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
        <br />
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />
        <br /> 
        <br /> 
        
        <label className='label'><strong>Link</strong></label>
        <p className="invalid">{!valid && link !== "" ? <strong>*Invalid Link*</strong> : ""}</p>
        <input
          type="link"
          placeholder="Link"
          name="link"
          value={link}
          onChange={handleLinkChange}
        />
        <br />
        <br />
        <label className='label'><strong>Description</strong></label>
        <br />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={handleDescriptionChange}
        /> 
        <br />
        <br />
        <label >
          I attest that this video is ewe related content and understand that
          falsely identifying unrelated content as ewe related is a violation of
          our terms and conditions and is punishable in a court of baa.
          <input className='label' type="checkbox" onChange={handleChange}></input>
        </label>
        <button disabled={!ready}>Submit</button>
      </form>
    </div>
  );
}

export default UploadForm;

// https://www.youtube.com/embed/5XWEVoI40sE
