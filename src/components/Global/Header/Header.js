import React, { useState } from "react";
import Switch from "react-switch";

import "./Header.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isDarkModeEnabled, setDarkMode] = useState(false);

  const handleThemeChange = (isDarkModeEnabled) => {
    setDarkMode(isDarkModeEnabled);

    // Change the DOM Element Attribute
    if (isDarkModeEnabled) {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "dark");
    } else {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "light");
    }
  };

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
          {/* <a href="/#/#">Blog</a> */}
          <a href="/#/contact">Contact</a>
          <a href="/#">
            <Switch
              height={14}
              width={30}
              uncheckedIcon={false}
              onChange={(isDarkModeEnabled) =>
                handleThemeChange(isDarkModeEnabled)
              }
              checked={isDarkModeEnabled}
            />
          </a>
        </div>

        <div className="header__hamBurger">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Header;
