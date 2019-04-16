import React from "react";
import PropTypes from "prop-types";
import Contact from "../../components/Contact/Contact";

import "./Footer.scss";

const propTypes = {};

const Footer = () => {
  return (
    <footer className="footer">
      <h4>Your Friends</h4>
      <p>&copy; YourFriends 2019. All right reserved</p>
      <Contact />
    </footer>
  );
};

Footer.propTypes = propTypes;

export default Footer;
