import React from "react";
import "../styles/StackCard.css";

const StackCard = ({ image, title, category }) => {
  const t_name = (
    "https://cdn.svgporn.com/logos/" +
    title.replace(/\./g, "") +
    ".svg"
  ).toLowerCase();
  console.log("title name link: ", t_name);

  return (
    <div className="card">
      <img
        src={t_name}
        width="40px"
        height="40px"
        alt={title}
        className="card-image"
        onError={(e) => {
          e.target.onerror = null; // Prevent infinite loop
          e.target.src = "fmwk.jpg"; // Fallback image
        }}
      />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
      </div>
    </div>
  );
};

export default StackCard;

