import React from 'react';
import PropTypes from 'prop-types';

import Hero from "./Hero/Hero";
import Why from "./Why/Why";
import Technologies from './Technologies/Technologies';
import ContactUs from './ContactUs/ContactUs';
import Advantages from "./Advantages/Advantages";
import Connection from "./Connection/Connection";

import './Main.scss';

const propTypes = {};

const Main = () => {
  return (
    <div className="main-page">
      <Hero />
      <Why />
      <Advantages />
      <Connection />
      <Technologies />
      <ContactUs />
    </div>
  );
};

Main.propTypes = propTypes;

export default Main;
