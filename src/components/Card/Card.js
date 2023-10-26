import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className="card">
      <div className="logo">
        <img alt="ok"src={img ? img : null}  />
      </div>
      <div className="title-tag">
        {title ? title : ""}
      </div>
      <div>
        <p className="description">{description ? description : ""}</p>
      </div>
    </div>
  );
};

export default Card;
