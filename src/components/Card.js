import React from "react";

function Card(props, myColor) {
  return (
    <div className="card" style={{ backgroundColor: `${myColor}` }}>
      <div className="card_info">
        <h3>{props.title}</h3>
        <p>{props.details}</p>
      </div>
      <div className="card__img">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

export default Card;
