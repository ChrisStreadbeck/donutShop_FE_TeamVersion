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
        <button>Buy</button>
      </div>
      <p>{props.text}</p>
    </div>
  );
};

export default DonutItem;

// {props.favorite ? (
//     <img
//       src="https://upload.wikimedia.org/wikipedia/en/e/e5/Yellow_Star.png"
//       alt="Gold Star"
//     />
//   ) : null}
