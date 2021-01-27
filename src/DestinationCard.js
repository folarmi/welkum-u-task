import React from "react";

function DestinationCard(props) {
  return (
    <div className="destination__card">
      <div className="destination__info">
        <img src={props.flag} alt="" />
        <p>{props.location}</p>
      </div>
      <div className="destination__city">
        <small>{props.city}</small>
      </div>
    </div>
  );
}

export default DestinationCard;
