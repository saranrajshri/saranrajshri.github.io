import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CustomDivider } from "../..";
import "./SkillsList.scss";

const SkillsList = () => {
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ delay: 1.5, duration: 2 }}
      >
        <div className="skillsList">
          <div className="skillsList__left"></div>
          <div className="skillsList__center">
            <h1>Skills</h1>
            <div className="skillsListContainer">
              <div className="skillsListContainer__section">
                <h3>Languages</h3>
                <ul>
                  <li>C / C++</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Dart</li>
                </ul>
              </div>
              <div className="skillsListContainer__section">
                <h3>Frame Works</h3>
                <ul>
                  <li>React.js</li>
                  <li>Express</li>
                  <li>React Native</li>
                  <li>Flutter</li>
                  <li>Selenium</li>
                </ul>
              </div>
              <div className="skillsListContainer__section">
                {" "}
                <h3>Database</h3>
                <ul>
                  <li>SQL</li>
                  <li>MongoDB</li>
                  <li>Firebase</li>
                </ul>
              </div>
              <div className="skillsListContainer__section">
                {" "}
                <h3>Other Tools</h3>
                <ul>
                  <li>Git</li>
                  <li>Docker</li>
                  <li>Azure</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="skillsList__right"></div>
        </div>
        <CustomDivider />
      </motion.div>
    </>
  );
};

export default SkillsList;
