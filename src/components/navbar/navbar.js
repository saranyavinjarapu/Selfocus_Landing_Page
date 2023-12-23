import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Menu, Sign } from "./helpers";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="selfocus__navbar">
      <div className="selfocus__navbar-links">
        <div className="selfocus__navbar-links_title">
          <p>SELFOCUS</p>
        </div>
        <div className="selfocus__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="selfocus__navbar-sign">
        <Sign />
      </div>
      <div className="selfocus__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine size={27} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line size={27} onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <div className="selfocus__navbar-menu_container scale-up-center">
            <div className="selfocus__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="selfocus__navbar-menu_container-links-sign">
              <Sign />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
