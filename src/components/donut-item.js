import React from "react";

const DonutItem = props => {
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
        <div className="btn">
          <button>Buy</button>
        </div>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default DonutItem;
