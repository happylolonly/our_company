import React from 'react'
import PropTypes from "prop-types";

import "./Contact_us.scss";

const propTypes = {};

const Contact = () => {
  return (
    <div className="contact">
      <h3>Связаться с нами</h3>
      <p></p>
      <ul>
        <li><a href="mailto:yourfriends@gmail.com">yourfriends@gmail.com</a></li>
        <li><a href="skype:yourfriends?call">yourfriends</a></li>
      </ul>
    </div>
  );
};

Contact.propTypes = propTypes;

export default Contact;
