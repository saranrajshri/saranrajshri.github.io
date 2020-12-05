import React, { useState, useEffect } from "react";
import "./AchievementsList.scss";
import { motion } from "framer-motion";
import { CustomDivider } from "../..";

const Achievements = () => {
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
        transition={{ duration: 2 }}
      >
        <div className="achievementsList">
          <div className="achievementsList__left"></div>
          <div className="achievementsList__center">
            <h1>Achievements</h1>
            <p>
              I have participated in{" "}
              <span className="achievementsList__textBold">
                many hackathons and other coding competitions
              </span>
              . I won some national level hackathons in India.
            </p>
            <ul>
              <li>
                <span className="achievementsList__textBold">
                  Smart India Hackathon 2019
                </span>{" "}
                Runner
              </li>
              <li>
                <span className="achievementsList__textBold">
                  TechGig Code Gladiators 2019
                </span>{" "}
                Top 15 Finalist
              </li>
              <li>
                <span className="achievementsList__textBold">
                  IBM Hack Challenge 2019
                </span>{" "}
                Top 30 Finalist
              </li>
              <li>
                <span className="achievementsList__textBold">
                  HERE Location Campus Hackathon
                </span>{" "}
                Winner
              </li>
              <li>
                <span className="achievementsList__textBold">
                  Smart India Hackathon 2020
                </span>{" "}
                Winner{" "}
              </li>
              <li>
                <span className="achievementsList__textBold">
                  TechGig Code Gladiators 2020
                </span>{" "}
                Finalist
              </li>
              <li>
                <span className="achievementsList__textBold">
                  IBM Hack Challenge 2020
                </span>{" "}
                Winner
              </li>
            </ul>
          </div>
          <div className="achievementsList__right"></div>
        </div>
        <CustomDivider />
      </motion.div>
    </>
  );
};

export default Achievements;
