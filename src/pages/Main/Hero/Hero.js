import React from "react";
import PropTypes from "prop-types";

import "./Hero.scss";

const propTypes = {};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-image">
        <img src="" alt="" />
      </div>
      <div className="hero-text">
        <h2>Мы восхищаемся современным вебом</h2>
        <h3>и тем как он может помочь воплотиться в жизнь вашим идеям</h3>
      </div>
    </div>
  );
};

Hero.propTypes = propTypes;

export default Hero;
