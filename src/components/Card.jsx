import React from "react";
import "./Card.css";

function Card({ title, text, buttonText, imageUrl }) {
  return (
    <div className="card">
      <div className="card-image">
        {imageUrl ? (
          <img src={imageUrl} alt="Card" />
        ) : (
          <div className="image-placeholder">Image cap</div>
        )}
      </div>
      <div className="card-content">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
}

export default Card;
