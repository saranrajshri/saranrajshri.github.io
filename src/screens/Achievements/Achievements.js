import React, { useEffect } from "react";
import { onPageLoadScrollTop } from "../../utils/utils";

import {
  AchievementsBanner,
  AchievementsList,
  Footer,
  Header,
  SkillsList,
} from "../../components";

const Achievements = () => {
  // Scroll Top
  useEffect(() => {
    onPageLoadScrollTop();
  }, []);
  return (
    <div>
      <Header />
      <AchievementsBanner />
      <AchievementsList />
      <SkillsList />
      <Footer delayDuration={0} />
    </div>
  );
};

export default Achievements;
