import React, { useEffect } from "react";
import { Banner, Footer, Header, ProjectsList } from "../../components";
import { onPageLoadScrollTop } from "../../utils/utils";

const Projects = () => {
  // Scroll Top
  useEffect(() => {
    onPageLoadScrollTop();
  }, []);
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
