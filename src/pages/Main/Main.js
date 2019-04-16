import React from 'react';
import PropTypes from 'prop-types';

import Hero from './Hero/Hero';
import Technologies from './Technologies/Technologies';

import './Main.scss';

const propTypes = {};

const Main = () => {
  return (
    <div className="main-page">
      <Hero />
      <Technologies />
    </div>
  );
};

Main.propTypes = propTypes;

export default Main;
