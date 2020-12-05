import React from "react";
import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="/#/#">
          Shri<span className="header__logoBold">SaranRaj</span>
        </a>
      </div>
      <div className="header__menu">
        <div className="header__menuList">
          <a href="/#/">Home</a>
          <a href="/#/projects">Projects</a>
          <a href="/#/achievements">Achievements</a>
          <a href="/#/#">Blog</a>
          <a href="/#/contact">Contact</a>
        </div>

        <div className="header__hamBurger">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Header;
