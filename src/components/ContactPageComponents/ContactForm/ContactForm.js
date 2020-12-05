import React, { useState } from "react";
import { motion } from "framer-motion";
import { useAlert } from "react-alert";

import "./ContactForm.scss";

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import NotesImage from "../../../images/avatar.png";
import CustomDivider from "../../Global/CustomDivider/CustomDivider";

const ContactForm = () => {
  const alert = useAlert();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidData = () => {
    return true;
  };

  const handleSubmit = () => {
    if (isValidData(formData)) {
      alert.success("Message Sent");
    } else {
      alert.error("Failed to send message");
    }
  };
  return (
    <div className="contactFormWrapper">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="banner">
          <div className="banner__avatar">
            <img src={NotesImage} alt="avatar" />
          </div>
          <div className="contactForm__title">
            <h3>Send me a message </h3>
          </div>
          <div>
            <div className="contactFrom__formContainer">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={handleChange}
                className="contactForm__input"
              />
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                onChange={handleChange}
                className="contactForm__input"
              />
              <textarea
                rows={3}
                placeholder="Enter your message here.."
                name="message"
                onChange={handleChange}
                className="contactForm__input"
              />
            </div>
            <center>
              <button
                onClick={handleSubmit}
                className="banner__exploreButton"
                style={{ marginTop: 20 }}
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ marginRight: 10 }}
                />
                Send Message
              </button>
            </center>
          </div>
        </div>
        <br />
        <br />

        <CustomDivider />
      </motion.div>
    </div>
  );
};

export default ContactForm;
