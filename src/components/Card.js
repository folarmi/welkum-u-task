import React from "react";

function Card(props) {
  return (
    <div className="card" style={{ backgroundColor: `${props.myColor}` }}>
      <div className="card_info">
        <h3>{props.title}</h3>
        <small>{props.details}</small>
      </div>
      <div className="card__img">
        <img src={props.image} alt="" />
      </div>
    </div>
  );
}

export default Card;
