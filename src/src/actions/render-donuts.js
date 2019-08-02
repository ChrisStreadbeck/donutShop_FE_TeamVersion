import React from "react";

import DonutItem from "../components/donut-item";

const RenderDonuts = props => {
  const [donuts, setDonut] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let result = await fetch(
        "https://obscure-taiga-71606.herokuapp.com/donuts"
      )
        .then(response => response.json())
        .then(data => setDonut(data))
        .catch(error => console.log(error));
    };
    fetchData();
  }, []);

  const handleDonuts = () => {
    return donuts.map(donut => {
      return (
        <DonutItem
          key={donut.id}
          id={donut.id}
          title={donut.title}
          text={donut.text}
          image={donut.image}
          price={donut.price}
          form={props.form}
        />
      );
    });
  };

  return <div className="donut-container">{handleDonuts()}</div>;
};

export default RenderDonuts;
