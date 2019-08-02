import React from "react";

const DonutItem = props => {
  const handleUpdateButtonClick = () => {
    console.log("edit it");
  };

  const handleDeleteButtonClick = () => {
    console.log("delete it");
  };

  return (
    <div className="donut-item-wrapper">
      <div className="title-wrapper">
        <h1>{props.title}</h1>
      </div>
      <div className="img-wrapper">
        <img src={props.image} className="donut-img" alt="donut image" />
      </div>
      <div className="price-button-wrapper">
        <p>${props.price}</p>
        <button>Buy</button>
      </div>
      <p>{props.text}</p>
      {props.form ? (
        <div className="update-delete-btns-wrapper">
          <button
            className="update-delete-btns"
            onClick={() => handleUpdateButtonClick()}
          >
            Update
          </button>
          <button
            className="update-delete-btns"
            onClick={() => handleDeleteButtonClick()}
          >
            Delete
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default DonutItem;
