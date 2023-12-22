import React from "react";

const navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <p>SELFOCUS</p>
        </div>
        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#selfocus">What is Selfocus?</a>
          </p>
          <p>
            <a href="#features">Features</a>
          </p>
          <p>
            <a href="#library">Library</a>
          </p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button type="button">GET EXTENSION</button>
      </div>
    </div>
  );
};

export default navbar;
