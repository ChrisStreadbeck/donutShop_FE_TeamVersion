import React, { useState } from "react";
import DropzoneComponent from "react-dropzone-component";
import request from "superagent";

import "../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../node_modules/dropzone/dist/min/dropzone.min.css";

import RenderDonuts from "../actions/render-donuts";
import Navbar from "../components/navbar";

const DonutForm = props => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [id, setId] = useState("");

  const imageRef = React.createRef();

  const componentConfig = () => {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post"
    };
  };

  const djsConfig = () => {
    return {
      addRemoveLinks: true,
      maxFiles: 1
    };
  };

  const handleDonutDrop = () => {
    return {
      addedfile: file => {
        let upload = request
          .post("https://api.cloudinary.com/v1_1/cstread/image/upload")
          .field("upload_preset", "donut-images")
          .field("file", file);
        upload.end((error, response) => {
          if (error) {
            console.log(error);
          }
          if (response) {
            setImage(response.body.secure_url);
          }
        });
      }
    };
  };

  const handleNewDonutSubmission = e => {
    e.preventDefault();
    fetch("https://obscure-taiga-71606.herokuapp.com/add-donut", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        title: title,
        text: text,
        price: price,
        image: image,
        id: id,
        userId: props.userId
      })
    })
      .then(result => result.json())
      .then(setTitle(""))
      .then(setText(""))
      .then(setPrice(""))
      .then(setImage(""))
      .then(setId(""))

      .then(imageRef.current.dropzone.removeAllFiles())
      .catch(error => console.log("form submit", error));
  };

  return (
    <div>
      <div className="form-wrapper">
        <form className="form" onSubmit={e => handleNewDonutSubmission(e)}>
          <div className="inputs-wrapper">
            <input
              type="text"
              placeholder="Donut Title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            <input
              type="text"
              placeholder="Text"
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <input
              type="text"
              placeholder="Price (no $ signs)"
              value={price}
              onChange={e => setPrice(e.target.value)}
            />

            <div className="dropzone-wrapper">
              <DropzoneComponent
                className="dropzone-image"
                ref={imageRef}
                config={componentConfig()}
                djsConfig={djsConfig()}
                eventHandlers={handleDonutDrop()}
              >
                <div className="message">Donut Picture</div>
              </DropzoneComponent>
            </div>

            <button className="btn" type="submit">
              SAVE
            </button>
          </div>
        </form>
        <div className="side-bar">
          <RenderDonuts form={true} />
        </div>
      </div>
    </div>
  );
};

export default DonutForm;
