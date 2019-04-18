import React from 'react';
import PropTypes from 'prop-types';

import './Advantage.scss';

const propTypes = {};

const Advantage = props => {
  return (
    <div className={`advantage ${props.className}`}>
      <div className="image">
        <img src={props.image} alt="" />
      </div>
      <div className="description">
        <h4>{props.title}</h4>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

Advantage.propTypes = propTypes;

export default Advantage;
