import React from "react";
import loadingImage from "../assets/Loading_icon.gif";

function Loading() {
  return (
    <div className="loading__image">
      <img src={loadingImage} alt="" />
    </div>
  );
}

export default Loading;
