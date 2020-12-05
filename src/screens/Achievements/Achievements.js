import React from "react";
import {
  AchievementsBanner,
  AchievementsList,
  Footer,
  Header,
  SkillsList,
} from "../../components";

const Achievements = () => {
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
