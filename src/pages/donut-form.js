import React, { useState } from "react";
import DropzoneComponent from "react-dropzone-component";
import request from "superagent";

import "../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../node_modules/dropzone/dist/min/dropzone.min.css";

import RenderDonuts from "../actions/render-donuts";

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
    <div className="dz-form-wrapper">
      <form
        className="dz-form-input"
        onSubmit={e => handleNewDonutSubmission(e)}
      >
        <input
          className="dz-input"
          type="text"
          placeholder="Donut Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="dz-input"
          type="text"
          placeholder="Text"
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <input
          className="dz-input"
          type="text"
          placeholder="Price (no $ signs)"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
        <DropzoneComponent
          className="dz-image"
          ref={imageRef}
          config={componentConfig()}
          djsConfig={djsConfig()}
          eventHandlers={handleDonutDrop()}
        >
          <div className="dz-message">Donut Picture</div>
        </DropzoneComponent>
        <button className="dz-btn" type="submit">
          save
        </button>
      </form>
      <RenderDonuts
        showUpdate={true}
        setTitle={setTitle}
        setText={setText}
        setPrice={setPrice}
        setImage={setImage}
        setId={setId}
      />
    </div>
  );
};

export default DonutForm;
