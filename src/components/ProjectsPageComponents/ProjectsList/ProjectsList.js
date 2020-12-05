import React, { useState, useContext } from "react";
import { motion } from "framer-motion";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Context } from "../../../context/Context";
import CustomDivider from "../../Global/CustomDivider/CustomDivider";

import "./ProjectsList.scss";

const ProjectsList = () => {
  const [state] = useContext(Context);

  return (
    <div className="projectsList">
      <div className="projectsList__left"></div>
      <div className="projectsList__center">
        {state.projects.map((project, index) => {
          return (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <div className="projectsListItem" key={index}>
                  <div className="project__title">
                    <h6>{project.title}</h6>
                  </div>
                  <p>{project.descriptionParagraph1}</p>
                  <p>{project.descriptionParagraph2}</p>
                  <a
                    href={`${project.sourceCodeLink}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more{" "}
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ marginLeft: 5 }}
                    />
                  </a>
                </div>
                <CustomDivider />
              </motion.div>
            </>
          );
        })}
      </div>
      <div className="projectsList__right"></div>
    </div>
  );
};
export default ProjectsList;
