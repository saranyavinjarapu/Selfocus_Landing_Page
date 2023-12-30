import React from "react";
import selfocusLogo from "../../assets/selfocus_logo_48.png";
import featuresLogo from "../../assets/featured.svg";
import { FooterMenu } from "./helpers";
import "./footer.css";

const footer = () => {
  return (
    <div className="selfocus__footer gradient__bg">
      <div className="selfocus__footer-info">
        <div className="selfocus__footer-info_logo">
          <img src={selfocusLogo} alt="selfocus_logo" />
        </div>
        <div className="selfocus__footer-info_status">
          <img src={featuresLogo} alt="selfocus_logo" />
        </div>
      </div>
      <div className="selfocus__footer-links">
        <div className="selfocus__footer-links_container">
          <FooterMenu />
        </div>
      </div>
      <div className="selfocus__footer-links_copyright">
        © 2023 Selffocus.io. All rights reserved.
      </div>
    </div>
  );
};

export default footer;
