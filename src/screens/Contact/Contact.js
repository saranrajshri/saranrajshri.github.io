import React, { useEffect } from "react";
import { onPageLoadScrollTop } from "../../utils/utils";

import { ContactForm, Footer, Header } from "../../components";

const Contact = () => {
  // Scroll Top
  useEffect(() => {
    onPageLoadScrollTop();
  }, []);
  return (
    <div>
      <Header />
      <ContactForm />
      <Footer delayDuration={0} />
    </div>
  );
};

export default Contact;
