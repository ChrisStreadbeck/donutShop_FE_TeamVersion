import React from "react";

const DonutItem = props => {
  const [donuts, setDonut] = React.useState([]);

  const handleUpdateButtonClick = () => {
    console.log("update it");
  };

  const handleDeleteButtonClick = id => {
    fetch(`https://obscure-taiga-71606.herokuapp.com/donut/${props.id}`, {
      method: "DELETE"
    })
      .then(setDonut(donuts.filter(donut => donut.id !== id)))
      .then(console.log("Deleted!"))
      .catch(error => console.log("deletion error", error));
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
        <div className="btn">
          <button>Buy</button>
        </div>
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
