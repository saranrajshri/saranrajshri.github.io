import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CustomDivider from "../../Global/CustomDivider/CustomDivider";
import "./AboutMe.scss";

import AvatarImage from "../../../images/avatar-capped.png";

const AboutMe = () => {
  const [showContent, setContentVisible] = useState(false);
  const [lastYPos, setLastYPos] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const yPosition = window.scrollY;
      setContentVisible(true);
      setLastYPos(yPosition);
    }
    window.addEventListener("scroll", handleScroll, false);
  }, [lastYPos]);
  return (
    <>
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ delay: 2, duration: 2 }}
      >
        <div className="aboutMe">
          <div className="aboutMe__left"></div>
          <div className="aboutMe__center">
            <div className="aboutMe__header">
              <div className="aboutMe__avatar">
                <img src={AvatarImage} alt="avatar" />
              </div>
              <div className="aboutMe__title">
                <div className="aboutMe__titleUpper">About</div>
                <div className="aboutMe__titleBelow">Read more about me</div>
              </div>
            </div>
            <p className="aboutMe__shortText">
              I'm from Chennai, TamilNadu. I started writing code since my{" "}
              <span className="aboutMe__boldText">9th Grade.</span> From that
              time I got{" "}
              <span className="aboutMe__boldText">
                addicted to programming.
              </span>
            </p>
            <p className="aboutMe__shortText">
              I started off with{" "}
              <span className="aboutMe__boldText">HTML, CSS, JS and PHP</span>.
              Then, I moved to{" "}
              <span className="aboutMe__boldText">
                React.js for FrontEnd and Node.js for Backend
              </span>
              . I have participated in many hackathons and I have also won some
              <span className="aboutMe__boldText">
                {" "}
                National Level Hackathons.
              </span>
            </p>{" "}
            <p className="aboutMe__shortText">
              I have done couple of internships as a{" "}
              <span className="aboutMe__boldText">
                Software Developer Intern and FrontEnd Development Intern
              </span>
              . I also do freelancing projects.
            </p>
            <p className="aboutMe__shortText">
              Parallely, I'm trying to improve{" "}
              <span className="aboutMe__boldText">
                competitive programming skills
              </span>{" "}
              and
              <span className="aboutMe__boldText">
                {" "}
                Data Structures and Algorithms Knowledge
              </span>
              .
            </p>
          </div>
          <div className="aboutMe__right"></div>
        </div>
        <CustomDivider />
      </motion.div>
    </>
  );
};

export default AboutMe;
