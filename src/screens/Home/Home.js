import React, { useEffect } from "react";
import { onPageLoadScrollTop } from "../../utils/utils";

import { motion } from "framer-motion";

import {
  AboutMe,
  CenterBanner,
  Footer,
  Header,
  ShortIntro,
} from "../../components";

const Home = () => {
  // Scroll Top
  useEffect(() => {
    onPageLoadScrollTop();
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
