import React, { useContext, useEffect } from "react";
import { onPageLoadScrollTop } from "../../utils/utils";

import { motion } from "framer-motion";

import {
  AboutMe,
  CenterBanner,
  Footer,
  Header,
  ShortIntro,
} from "../../components";
import { Context } from "../../context/Context";

const Home = () => {
  const [state] = useContext(Context);
  // Scroll Top
  useEffect(() => {
    onPageLoadScrollTop();
    if (state.isDarkModeEnabled) {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "dark");
    } else {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "light");
    }
  }, []);
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <CenterBanner />
        <ShortIntro />
        <AboutMe />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Home;
