import React from 'react';
import PropTypes from 'prop-types';

import './Contact.scss';

const propTypes = {};

const Contact = () => {
  return (
    <div className="contact">
      <ul>
        <li>
          <a href="mailto:happylolonly@gmail.com">
            <img src={require('../../components/Contact/images/envelope.svg')} alt="email" />
            <span>happylolonly@gmail.com</span>
          </a>
        </li>
        <li>
          <a href="skype:happylolonly">
            <img src={require('../../components/Contact/images/skype.svg')} alt="skype" />
            <span>happylolonly</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

Contact.propTypes = propTypes;

export default Contact;
