import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../../../components/Contact/Contact';

import "./ContactUs.scss";

const propTypes = {};

const ContactUs = () => {
  return (
    <div className="contact-us">
      <a name="contact"><h3>Связаться с нами</h3></a>
      <p>we will do our best. Really</p>
      {/* или другую воду */}
      <Contact />
    </div>
  );
};

ContactUs.propTypes = propTypes;

export default ContactUs;
