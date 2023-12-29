import React from "react";
import "./feature.css";

const Feature = ({ title, text, imagePath, imageAlt }) => (
  <div className="selfocus__features-container__feature">
    <div className="selfocus__features-container__feature-title">
      {imagePath ? (
        <img src={imagePath} alt={imageAlt ? imageAlt : ""} />
      ) : (
        <div />
      )}
      <h1>{title}</h1>
    </div>
    <div className="selfocus__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
