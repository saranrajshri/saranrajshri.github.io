import React from "react";
import { Banner, Footer, Header, ProjectsList } from "../../components";

const Projects = () => {
  return (
    <div>
      <Header />
      <Banner />
      <ProjectsList />
      <Footer delayDuration={0} />
    </div>
  );
};

export default Projects;
