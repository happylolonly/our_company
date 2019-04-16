import React from 'react';
import PropTypes from 'prop-types';

import Hero from "./Hero/Hero";
import Why from "./Why/Why";
import Technologies from './Technologies/Technologies';

import './Main.scss';

const propTypes = {};

const Main = () => {
  return (
    <div className="main-page">
      <Hero />
      <Why />
      <Technologies />
    </div>
  );
};

Main.propTypes = propTypes;

export default Main;
