import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../../../components/Contact/Contact';

import "./ContactUs.scss";

const propTypes = {};

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h3>Связаться с нами</h3>
      <p></p>
      <Contact />
    </div>
  );
};

ContactUs.propTypes = propTypes;

export default ContactUs;
