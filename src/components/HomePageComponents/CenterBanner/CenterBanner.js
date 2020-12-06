import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link, Element } from "react-scroll";

import "./CenterBanner.scss";

import AvatarImage from "../../../images/avatar.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../../../context/Context";

const CenterBanner = () => {
  const [state, dispatch] = useContext(Context);
  const handleThemeChange = () => {
    dispatch({ type: "SET_DARK_MODE", payload: !state.isDarkModeEnabled });
  };
  return (
    <Element name="centerBanner">
      <div className="banner">
        <div className="banner__avatar" onClick={handleThemeChange}>
          <img src={AvatarImage} alt="avatar" />
        </div>
        {/* Animate */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="banner__title">
            <h1 className="banner__titleText">Hii! I'm Saran Raj</h1>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 2 }}
        >
          <motion.div whileHover={{ y: -3 }}>
            <Link
              activeClass="active"
              to="centerBanner"
              spy={true}
              smooth={true}
              offset={400}
              duration={500}
            >
              <button className="banner__exploreButton">
                EXPLORE
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{ marginLeft: 10 }}
                />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </Element>
  );
};

export default CenterBanner;
