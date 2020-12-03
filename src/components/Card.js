import React from "react";

import photo1 from "../assets/photo1.png";
import "./Card.scss";

function Card({ photo, name, position }) {
  return (
    <div className="card">
      <figure className="card__shape">
        <img src={photo} alt="Person on tour" className="card__image" />
        <figcaption className="card__caption">{position}</figcaption>
      </figure>
      <p className="card__name">{name}</p>
    </div>
  );
}

export default Card;
